const loadBlogPost = document.getElementById("loadPostButton");

document.querySelectorAll('table.interactive').forEach(element => {
    element.addEventListener('click', (event) => {
        const highlightedClass = 'blog-highlighted';
        const isRow = element => element.tagName === 'TR' && element.parentElement.tagName === 'TBODY';
        const newlySelectedRow = event.composedPath().find(isRow);
        const previouslySelectedRow = Array.from(newlySelectedRow.parentElement.children).filter(isRow).find(element => element.classList.contains(highlightedClass));
        if (previouslySelectedRow && previouslySelectedRow !== newlySelectedRow) {
            previouslySelectedRow.classList.remove(highlightedClass);
        }
        if (newlySelectedRow) {
            newlySelectedRow.classList.add(highlightedClass);
        }
    });
});

loadBlogPost.addEventListener('click', () => {
    const selected = document.querySelector('.blog-highlighted');
    const post = selected.dataset.post;
    window.location.href = `blogpost.html?id=${post}`
})