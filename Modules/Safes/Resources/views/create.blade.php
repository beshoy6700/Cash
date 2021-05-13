@extends('layouts.modern.app')
@section('title','إضافة خزينة جديدة')
@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header row">
        <div class="content-header-left col-md-6 col-12 mb-1">
            <h2 class="m-0 text-dark">قسم إعدادت البرنامج</h2>
        </div>
        <div class="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-12">
            <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                    {{ Breadcrumbs::render('create_safe') }}
                </ol>
            </div>
        </div>
    </div>
    <div class="row match-height">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title text-center" id="basic-layout-round-controls"><strong>اضافة خزينة جديدة</strong></h4>
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
                        {!! Form::open(array('route'=>'safes.store','class'=>'form-horizontal','files'=>true,'role'=>'form')) !!}
                        @csrf
                        <div class="form-body">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="name">الخزينة</label>
                                                {!! Form::text("name",null,array('required','class'=>'form-control round','placeholder'=>'الخزينة','autocomplete'=>'off')) !!}
                                            </div>
                                            @error("name")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="state_id">الفرع</label>
                                                {!! Form::select("company_id",$companies,null,array('required','class'=>'form-control round select2','placeholder'=>'اختار المحافظة','autocomplete'=>'off')) !!}
                                            </div>
                                            @error("company_id")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                    </div>
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                            <label for="status">الحالة </label>
                                            <div class="form-group">
                                                <label class="switch ">
                                                    <input type="checkbox" class="default" name="status" value="1" checked>
                                                    <span class="slider round"></span>
                                                </label>
                                            </div>
                                            @error("status")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                    </div>


                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary">
                                    <i class="la la-check-square-o"></i> حفظ
                                </button>
                                <a href="{{route('safes')}}" class="btn btn-warning mr-1">
                                    <i class="ft-x"></i> الغاء
                                </a>
                            </div>
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
@endsection
