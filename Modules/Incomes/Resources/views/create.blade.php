@extends('layouts.modern.app')
@section('title','اضافة تصنيف ايراد جديد')
@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header row">
        <div class="content-header-left col-md-6 col-12 mb-1">
            <h2 class="content-header-title">
                <strong>قسم الادارة المالية</strong>
            </h2>
        </div>
        <div class="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-12">
            <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                    {{ Breadcrumbs::render('create_income') }}
                </ol>
            </div>
        </div>
    </div>
    <div class="row match-height">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title text-center"
                        id="basic-layout-round-controls">اضافة تصنيف ايراد جديد</h4>
                    <a class="heading-elements-toggle"><i class="la la-ellipsis-v font-medium-3"></i></a>
                    <div class="heading-elements">
                        <ul class="list-inline mb-0">
                            <li><a data-action="collapse"><i class="ft-minus"></i></a></li>
                            <li><a data-action="reload"><i class="ft-rotate-cw"></i></a></li>
                            <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
                            <li><a data-action="close"><i class="ft-x"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-content collapse show">
                    <div class="card-body">
                        <div class="card-text">
                            @include('layouts/modern/includes/alerts/success')
                            @include('layouts/modern/includes/alerts/error')
                        </div>
                        {!! Form::open(array('route'=>'incomes.store','class'=>'form-horizontal','files'=>true,'role'=>'form')) !!}
                        @csrf
                        <div class="form-body">
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="name">التصنيف </label>
                                        {!! Form::text('name',null,array('required','class'=>'form-control round','placeholder'=>'اسم التصنيف','autocomplete'=>'off')) !!}
                                    </div>
                                    @error('name')
                                    <span class="text-danger">{{$message}}</span>
                                    @enderror
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="mobile">الوصف</label>
                                        {!! Form::text("description",null,array('class'=>'form-control round','placeholder'=>'الوصف','autocomplete'=>'off')) !!}
                                    </div>
                                    @error("description")
                                    <span class="text-danger">{{$message}}</span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mt-1">
                                        <input type="checkbox" value="1"
                                               name="status" id="status" class="switchery" data-color="success"
                                               checked/>
                                        <label for="active"
                                               class="card-title ml-1">الحالة </label>
                                        @error("active")
                                        <span class="text-danger">{{$message }}</span>
                                        @enderror
                                    </div>
                                </div>
                            </div>

                            <div class="row hidden" id="cats_list">
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="parent_id">الايرادات</label>
                                        {!! Form::select("parent_id",$incomes,null,array('class'=>'form-control round','placeholder'=>'الايرادات','autocomplete'=>'off')) !!}
                                    </div>
                                    @error("parent_id")
                                    <span class="text-danger">{{$message}}</span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-group mt-1">
                                        <input type="radio"
                                               name="type"
                                               value="1"
                                               checked
                                               class="switchery"
                                               data-color="success"/>

                                        <label
                                            class="card-title ml-1">
                                            تصنيف رئيسي
                                        </label>

                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group mt-1">
                                        <input type="radio"
                                               name="type"
                                               value="2"
                                               class="switchery" data-color="success"/>

                                        <label
                                            class="card-title ml-1">
                                            تصنيف فرعي
                                        </label>

                                    </div>
                                </div>
                            </div>


                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary">
                                    <i class="la la-check-square-o"></i> إضافة
                                </button>
                                <a href="{{route('incomes')}}" class="btn btn-warning mr-1">
                                    <i class="ft-x"></i> إلغاء
                                </a>
                            </div>
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
            @endsection
            @section('script')

                <script>
                    $('input:radio[name="type"]').change(
                        function () {
                            if (this.checked && this.value == '2') {  // 1 if main com - 2 if sub com
                                $('#cats_list').removeClass('hidden');

                            } else {
                                $('#cats_list').addClass('hidden');
                            }
                        });
                </script>
@stop
