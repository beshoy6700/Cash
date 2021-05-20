<?php
/* This File Generated By Beshoy Gamal */


// Home > Companies
Breadcrumbs::for('companies', function ($trail) {
    $trail->parent('home');
    $trail->push('قائمة الشركات', route('companies'));
});
// Home > Companies > Create
Breadcrumbs::for('create_company', function ($trail) {
    $trail->parent('home');
    $trail->push('قائمة الشركات', route('companies'));
    $trail->push('إضافة شركة جديدة', route('companies.create'));
});
// Home > Companies > Edit
Breadcrumbs::for('edit_company', function ($trail, $company) {
    $trail->parent('home');
    $trail->push('قائمة الشركات', route('companies'));
    $trail->push($company->name, route('companies.edit', $company->id));
});
