const fs = require('fs');
const path = require('path');

const srcDirectory = path.join(__dirname, 'src');
const publicDirectory = path.join(__dirname, 'public');
const resourcesDirectory = path.join(__dirname, 'res');

function ensureDirSync(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function injectArguments(content, args) {
    return content.replace(/<!--\s*#arg\s+"(.+?)"\s*-->/g, (match, argName) => {
        return args[argName] || match;
    });
}

function replaceIncludes(content, baseDir) {
    const includeRegex = /<!--\s*#include\s+file="(.+?)"\s*(.*?)\s*-->/g;
    
    return content.replace(includeRegex, (match, includePath, argsStr) => {
        console.log(`Found include directive: ${match}`);
        
        const fullPath = path.join(baseDir, includePath);
        console.log(`Attempting to include file from: ${fullPath}`);
        
        const args = {};
        const argsRegex = /\s*(\w+)="([^"]+)"/g;
        let matchArg;
        while ((matchArg = argsRegex.exec(argsStr)) !== null) {
            args[matchArg[1]] = matchArg[2];
        }
        
        if (fs.existsSync(fullPath)) {
            let includedContent = fs.readFileSync(fullPath, 'utf8');
            console.log(`Including content from: ${fullPath}`);
            includedContent = injectArguments(includedContent, args);
            return includedContent;
        } else {
            console.warn(`Include file not found: ${fullPath}`);
            return match;
        }
    });
}

function processHtmlFiles(src, dest) {
    const items = fs.readdirSync(src, { withFileTypes: true });
    
    items.forEach(item => {
        const srcPath = path.join(src, item.name);
        const destPath = path.join(dest, item.name);
        
        if (item.isDirectory()) {
            ensureDirSync(destPath);
            processHtmlFiles(srcPath, destPath);
        } else if (item.isFile() && path.extname(item.name) === '.html') {
            console.log(`Processing HTML file: ${srcPath}`);
            let content = fs.readFileSync(srcPath, 'utf8');
            const updatedContent = replaceIncludes(content, src);
            console.log(`Replacing content in: ${destPath}`);
            fs.writeFileSync(destPath, updatedContent, 'utf8');
        }
    });
}

// NO chaneges
function copyResources(src, dest) {
    const items = fs.readdirSync(src, { withFileTypes: true });
    items.forEach(item => {
        const srcPath = path.join(src, item.name);
        const destPath = path.join(dest, item.name);
        
        if (fs.statSync(srcPath).isDirectory()) {
            copyResources(srcPath, destPath);
        } else {
            if (!fs.existsSync(dest)) {
                fs.mkdirSync(dest);
            }
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied resource: ${srcPath} → ${destPath}`);
        }
    });
}

ensureDirSync(publicDirectory);
ensureDirSync(resourcesDirectory);
copyResources(resourcesDirectory, publicDirectory);
processHtmlFiles(srcDirectory, publicDirectory);

console.log('All HTML files processed.');
