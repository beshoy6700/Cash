<div class="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li class=" nav-item"><a href="{{route('dashboard')}}"><i class="la la-home"></i>
                    <span class="menu-title" data-i18n="nav.dash.main">الرئيسية</span></a>
            </li>
            <li class=" nav-item"><a href="#"><i class="la la-television"></i><span class="menu-title"
                                                                                    data-i18n="nav.templates.main">إدارة شئون العاملين</span></a>
                <ul class="menu-content">
                    <li><a class="menu-item" href="#" data-i18n="nav.templates.vert.main"> الهيكل الوظيفي</a>
                        <ul class="menu-content">
                            <li><a class="menu-item" href="{{route('jobStructure.create')}}"
                                   data-i18n="nav.templates.vert.classic_menu">اضافة مسمي وظيفي</a>
                            </li>
                            <li><a class="menu-item" href="{{route('jobStructure')}}">قائمة الهيكل الوظيفي</a>
                            </li>
                        </ul>
                    </li>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="#" data-i18n="nav.templates.vert.main"> الطلبات</a>
                            <ul class="menu-content">
                                <li><a class="menu-item" href="#"
                                       data-i18n="nav.templates.vert.classic_menu">طلب اجازة</a>
                                </li>
                                <li><a class="menu-item" href="#">طلب اذن خاص</a>
                                </li>
                                <li><a class="menu-item" href="#">طلب بدل انتقال</a>
                                </li>
                                <li><a class="menu-item" href="#">طلب تسجيل شكوي</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </ul>
            </li>
            <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">قسم إعدادات البرنامج</span><i class="la la-ellipsis-h ft-minus"
                                                                                     data-toggle="tooltip"
                                                                                     data-placement="right" data-original-title="Layouts"></i>
            </li>
            @if (Route::has('admin.clinics'))
                <li class=" navigation-header">
                    <span data-i18n="nav.category.layouts">قسم العيادات</span><i class="la la-ellipsis-h ft-minus"
                                                                                 data-toggle="tooltip"
                                                                                 data-placement="right"
                                                                                 data-original-title="Layouts"></i>
                </li>
                <li class=" nav-item"><a href="#"><i class="la la-columns"></i>
                        <span class="menu-title" data-i18n="nav.page_layouts.main">العيادات</span>
                        @if(get_clinics_count_active() > 0)
                            <span class="badge badge badge-pill badge-success float-right mr-2">
                        {{get_clinics_count_active()}}</span>
                        @endif
                    </a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="{{route('admin.clinics.create')}}"
                               data-i18n="nav.page_layouts.1_column">إضافة عيادة</a>
                        </li>
                        <li><a class="menu-item" href="{{route('admin.clinics')}}"
                               data-i18n="nav.page_layouts.2_columns">
                                قائمة العيادات
                                @if(get_clinics_count() > 0)
                                    <span class="badge badge badge-danger badge-pill float-right mr-2">
                                {{get_clinics_count()}}</span>
                                @endif
                            </a>

                        </li>
                    </ul>
                </li>
            @endif
            <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">قسم البلدان</span><i class="la la-ellipsis-h ft-minus"
                                                                            data-toggle="tooltip"
                                                                            data-placement="right"
                                                                            data-original-title="Layouts"></i>
            </li>
            @if (Route::has('countries'))
                <li class=" nav-item"><a href="#"><i class="la la-columns"></i>
                        <span class="menu-title" data-i18n="nav.page_layouts.main">الدول</span>
                        @if(get_countries_count_active() > 0)
                            <span class="badge badge badge-pill badge-success float-right mr-2">
                        {{get_countries_count_active()}}</span>
                        @endif
                    </a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="{{route('countries.create')}}"
                               data-i18n="nav.page_layouts.1_column">إضافة دولة</a>
                        </li>
                        <li><a class="menu-item" href="{{route('countries')}}" data-i18n="nav.page_layouts.2_columns">
                                قائمة الدول
                                @if(get_countries_count() > 0)
                                    <span class="badge badge badge-danger badge-pill float-right mr-2">
                                {{get_countries_count()}}</span>
                                @endif
                            </a>

                        </li>
                    </ul>
                </li>
            @endif
            @if (Route::has('states'))
                <li class=" nav-item"><a href="#"><i class="la la-columns"></i>
                        <span class="menu-title" data-i18n="nav.page_layouts.main">المحافظات</span>
                        @if(get_states_count_active() > 0)
                            <span class="badge badge badge-pill badge-success float-right mr-2">
                        {{get_states_count_active()}}</span>
                        @endif
                    </a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="{{route('states.create')}}"
                               data-i18n="nav.page_layouts.1_column">إضافة محافظة</a>
                        </li>
                        <li><a class="menu-item" href="{{route('states')}}" data-i18n="nav.page_layouts.2_columns">
                                قائمة المحافظات
                                @if(get_states_count() > 0)
                                    <span class="badge badge badge-danger badge-pill float-right mr-2">
                               {{get_states_count()}}
                                </span>
                                @endif
                            </a>

                        </li>
                    </ul>
                </li>
            @endif
            @if (Route::has('cities'))
                <li class=" nav-item"><a href="#"><i class="la la-columns"></i>
                        <span class="menu-title" data-i18n="nav.page_layouts.main">المدن</span>
                        @if(get_cities_count_active() > 0)
                            <span class="badge badge badge-pill badge-success float-right mr-2">
                        {{get_cities_count_active()}}
                    </span>
                        @endif
                    </a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="{{route('cities.create')}}"
                               data-i18n="nav.page_layouts.1_column">إضافة مدينة</a>
                        </li>
                        <li><a class="menu-item" href="{{route('cities')}}" data-i18n="nav.page_layouts.2_columns">
                                قائمة المدن
                                @if(get_cities_count() > 0)
                                    <span class="badge badge badge-danger badge-pill float-right mr-2">
                               {{get_cities_count()}}
                            </span>
                                @endif
                            </a>

                        </li>
                    </ul>
                </li>
            @endif
            @if (Route::has('areas'))
                <li class=" nav-item"><a href="#"><i class="la la-columns"></i>
                        <span class="menu-title" data-i18n="nav.page_layouts.main">المراكز</span>
                        @if(get_areas_count_active() > 0)
                            <span class="badge badge badge-pill badge-success float-right mr-2">
                       {{get_areas_count_active()}}</span>
                        @endif
                    </a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="{{route('areas.create')}}" data-i18n="nav.page_layouts.1_column">إضافة
                                مركز</a>
                        </li>
                        <li><a class="menu-item" href="{{route('areas')}}" data-i18n="nav.page_layouts.2_columns">
                                قائمة المراكز
                                @if(get_areas_count() > 0)
                                    <span class="badge badge badge-danger badge-pill float-right mr-2">
                                {{get_areas_count()}}</span>
                                @endif
                            </a>
                        </li>
                    </ul>
                </li>
            @endif
            @if (Route::has('subAreas'))
                <li class=" nav-item"><a href="#"><i class="la la-columns"></i>
                        <span class="menu-title" data-i18n="nav.page_layouts.main">المناطق</span>
                        @if(get_subAreas_count_active() > 0)
                            <span class="badge badge badge-pill badge-success float-right mr-2">
                        {{get_subAreas_count_active()}}</span>
                        @endif
                    </a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="{{route('subAreas.create')}}"
                               data-i18n="nav.page_layouts.1_column">إضافة منطقة</a>
                        </li>
                        <li><a class="menu-item" href="{{route('subAreas')}}" data-i18n="nav.page_layouts.2_columns">
                                قائمة المناطق
                                @if(get_subAreas_count() > 0)
                                    <span
                                        class="badge badge badge-danger badge-pill float-right mr-2">{{get_subAreas_count()}}</span>
                                @endif
                            </a>

                        </li>
                    </ul>
                </li>
            @endif
            @if (Route::has('companies'))
                <li class=" nav-item"><a href="#"><i class="la la-columns"></i>
                        <span class="menu-title" data-i18n="nav.page_layouts.main">الشركات</span>
                        @if(get_companies_count_active() > 0)
                            <span class="badge badge badge-pill badge-success float-right mr-2">
                        {{get_companies_count_active()}}</span>
                        @endif
                    </a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="{{route('companies.create')}}"
                               data-i18n="nav.page_layouts.1_column">إضافة شركة</a>
                        </li>
                        <li><a class="menu-item" href="{{route('companies')}}" data-i18n="nav.page_layouts.2_columns">
                                قائمة الشركات
                                @if(get_companies_count() > 0)
                                    <span
                                        class="badge badge badge-danger badge-pill float-right mr-2">{{get_companies_count()}}</span>
                                @endif
                            </a>

                        </li>
                    </ul>
                </li>
            @endif
            @if (Route::has('safes'))
                <li class=" nav-item"><a href="#"><i class="la la-columns"></i>
                        <span class="menu-title" data-i18n="nav.page_layouts.main">الخزائن</span>
                        @if(get_safes_count_active() > 0)
                            <span class="badge badge badge-pill badge-success float-right mr-2">
                        {{get_safes_count_active()}}</span>
                        @endif
                    </a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="{{route('safes.create')}}"
                               data-i18n="nav.page_layouts.1_column">إضافة خزينة</a>
                        </li>
                        <li><a class="menu-item" href="{{route('safes')}}" data-i18n="nav.page_layouts.2_columns">
                                قائمة الخزائن
                                @if(get_safes_count() > 0)
                                    <span
                                        class="badge badge badge-danger badge-pill float-right mr-2">{{get_safes_count()}}</span>
                                @endif
                            </a>

                        </li>
                    </ul>
                </li>
            @endif
            @if (Route::has('incomes'))
                <li class=" nav-item"><a href="#"><i class="la la-columns"></i>
                        <span class="menu-title" data-i18n="nav.page_layouts.main">تصنيفات الايراد</span>
                        @if(get_incomes_count_active() > 0)
                            <span class="badge badge badge-pill badge-success float-right mr-2">
                        {{get_incomes_count_active()}}</span>
                        @endif
                    </a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="{{route('incomes.create')}}"
                               data-i18n="nav.page_layouts.1_column">إضافة تصنيف ايراد</a>
                        </li>
                        <li><a class="menu-item" href="{{route('incomes')}}" data-i18n="nav.page_layouts.2_columns">
                                قائمة الايرادات
                                @if(get_incomes_count() > 0)
                                    <span
                                        class="badge badge badge-danger badge-pill float-right mr-2">{{get_incomes_count()}}</span>
                                @endif
                            </a>

                        </li>
                    </ul>
                </li>
            @endif
        </ul>
        </li>
        </ul>
    </div>
</div>
