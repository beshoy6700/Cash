<?php
/* This File Generated By Beshoy Gamal */


// Home > Companies
Breadcrumbs::for('jobStructure', function ($trail) {
    $trail->parent('home');
    $trail->push('قائمة الهيكل الوظيفي', route('jobStructure'));
});
// Home > Companies > Create
Breadcrumbs::for('create_jobStructure', function ($trail) {
    $trail->parent('home');
    $trail->push('قائمة الهيكل الوظيفي', route('jobStructure'));
    $trail->push('إضافة وصف وظيفي', route('jobStructure.create'));
});
// Home > Companies > Edit
Breadcrumbs::for('edit_jobStructure', function ($trail, $jobStructure) {
    $trail->parent('home');
    $trail->push('قائمة الهيكل الوظيفي', route('jobStructure'));
    $trail->push($jobStructure->name, route('jobStructure.edit', $jobStructure->id));
});

