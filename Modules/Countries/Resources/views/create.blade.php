@extends('layouts.modern.app')
@section('title','إضافة دولة جديدة')
@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header row">
        <div class="content-header-left col-md-6 col-12 mb-1">
            <h2 class="content-header-title">
                <strong>قسم الدول</strong>
            </h2>
        </div>
        <div class="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-12">
            <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                    {{ Breadcrumbs::render('create_country') }}
                </ol>
            </div>
        </div>
    </div>
    <div class="row match-height">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title text-center" id="basic-layout-round-controls">إضافة دولة جديدة</h4>
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
                        {!! Form::open(array('route'=>'countries.store','class'=>'form-horizontal','files'=>true,'role'=>'form')) !!}
                        @csrf
                        <div class="form-body">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="name">الاسم</label>
                                                {!! Form::text("name",null,array('required','class'=>'form-control round','placeholder'=>'الاسم','autocomplete'=>'off')) !!}
                                            </div>
                                            @error("name")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="slug">slug</label>
                                                {!! Form::text("slug",null,array('required','class'=>'form-control round','placeholder'=>'slug')) !!}
                                            </div>
                                            @error("slug")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                    </div>
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="lat">lat</label>
                                        {!! Form::text("lat",null,array('class'=>'form-control round','placeholder'=>'lat','autocomplete'=>'off')) !!}
                                    </div>
                                    @error("lat")
                                    <span class="text-danger">{{$message}}</span>
                                    @enderror
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="long">long</label>
                                        {!! Form::text("long",null,array('class'=>'form-control round','placeholder'=>'long','autocomplete'=>'off')) !!}
                                    </div>
                                    @error("long")
                                    <span class="text-danger">{{$message}}</span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                            <label for="active">@lang('countries::index.status') </label>
                                            <div class="form-group">
                                                <label class="switch ">
                                                    <input type="checkbox" class="default" name="active" value="1" checked>
                                                    <span class="slider round"></span>
                                                </label>
                                            </div>
                                            @error("active")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                    </div>



                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary">
                                    <i class="la la-check-square-o"></i> إضافة
                                </button>
                                <a href="{{route('countries')}}" class="btn btn-warning mr-1">
                                    <i class="ft-x"></i> إلغاء
                                </a>
                            </div>
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
@endsection
