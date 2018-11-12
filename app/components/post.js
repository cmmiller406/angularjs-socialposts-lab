"use strict"

const post = {
    template: `
    <p id="post-title">{{ $ctrl.post.title }}</p>
    <p id="post-text">{{ $ctrl.post.text }}</p>
    `,
    bindings: {
        post: "<"
    },
}

angular
    .module("App")
    .component("post", post);