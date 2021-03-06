<?php
/* This File Generated By Beshoy Gamal */


// Home > incomes
Breadcrumbs::for('incomes', function ($trail) {
    $trail->parent('home');
    $trail->push('قائمة تصنيف الايرادات', route('incomes'));
});
// Home > incomes > Create
Breadcrumbs::for('create_income', function ($trail) {
    $trail->parent('home');
    $trail->push('قائمة تصنيف الايرادات', route('incomes'));
    $trail->push('إضافة شركة جديدة', route('incomes.create'));
});
// Home > incomes > Edit
Breadcrumbs::for('edit_income', function ($trail, $income) {
    $trail->parent('home');
    $trail->push('قائمة تصنيف الايرادات', route('incomes'));
    $trail->push($income->name, route('incomes.edit', $income->id));
});

