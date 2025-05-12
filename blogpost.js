function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
    }
    if (urlparameter !== undefined) {
        return urlparameter;
    } else {
        return defaultvalue;
    }
}

async function fetchPost(id) {
    try {
        let beginningTime = performance.now();
        const response = await fetch(`./blog/${id}.json`);
        const blogpost = await response.json();
        console.log(blogpost)
        blogPostContent.innerHTML = blogpost.htmlContent;
        subtitle.innerText = blogpost.title;
        let endingTime = performance.now();
        fetchTxt.innerText = `Operation took ${endingTime - beginningTime}ms!`;
        return;
    } catch (error) {
        showPopup("We hit a wall!", "<div class='image-text-container'><img src='images/firewall.png'></img><div>There was an error fetching this post, maybe it's ID is invalid or your network state was changed while loading... Anyways, try again later!</div></div>", () => {
            window.location.href = "index.html";
        }, "error-window popup-with-image");
        $(blogPostContent).slideUp("slow", () => {
            blogPostContent.remove();
        })
    }
}

const fetchTxt = document.getElementById("postFetchText");
const postArg = getUrlParam('id', undefined);
const blogPostContent = document.getElementById("blogPostContent");
const sub = document.getElementById("subtitle");

fetchPost(postArg);