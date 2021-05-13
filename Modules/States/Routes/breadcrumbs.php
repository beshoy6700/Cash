<?php
/* This File Generated By Beshoy Gamal*/

###### Admin Section #####
// Home > States
Breadcrumbs::for('states', function ($trail) {
    $trail->parent('home');
    $trail->push(__('admin/sidebar.states'), route('states'));
});
// Home > States > Create
Breadcrumbs::for('create_state', function ($trail) {
    $trail->parent('home');
    $trail->push(__('admin/sidebar.states'), route('states'));
    $trail->push(__('admin/sidebar.add.state'), route('states.create'));
});
// Home > States > Edit
Breadcrumbs::for('edit_state', function ($trail, $state) {
    $trail->parent('home');
    $trail->push(__('admin/sidebar.states'), route('states'));
    $trail->push($state->name, route('states.edit', $state->id));
});
####### Frontend #########

