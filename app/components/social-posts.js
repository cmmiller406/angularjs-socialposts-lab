"use strict";

const socialPosts = {
    template: `
    <section class="main-container">
        <p id="main-title"> My Thoughts</p>
        <button id="new-btn" ng-click="$ctrl.onDisplay();">New Thought</button>
        <section class="post-section" ng-repeat="post in $ctrl.posts">
        <post
        post="post"
        add-post="$ctrl.addPost(postToAdd);" 
        ng-repeat="post in $ctrl.posts"></post>
        </section>
        <post-form
        on-submit="$ctrl.onSubmit(postToAdd);"
        ng-if="$ctrl.display"
        ></post-form>
    </section>
    `,
    controller: [function() {
        const vm = this;
        vm.posts = [];
        vm.display = false;
        vm.onSubmit = (postToAdd) => {
            vm.posts.push(angular.copy(postToAdd));
            vm.display = false;
        };
        vm.onDisplay = () => {
            vm.display = true;
        };
    }]
}

angular
    .module("App")
    .component("socialPosts", socialPosts)