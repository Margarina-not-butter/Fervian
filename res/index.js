const loadBlogPost = document.getElementById("loadPostButton");

loadBlogPost.addEventListener('click', () => {
    const selected = document.querySelector('.sunken-highlighted');
    const post = selected.dataset.post;
    window.location.href = `blogpost.html?id=${post}`
})