"use strict";

const postForm = {
    template: `
    <form class="post-form" ng-submit="$ctrl.onSubmit({ postToAdd: $ctrl.post });">
    <p id="form-title">Title</p>
    <input placeholder="Post Title" ng-model="$ctrl.post.title" type="text">
    <p id="form-thought">Thought</p>
    <textarea ng-model="$ctrl.post.text"></textarea>
    <button id="add-btn">Add Post</button>
    </form>
    `,
    bindings: {
        onSubmit: "&"
    }
}

angular
    .module("App")
    .component("postForm", postForm)