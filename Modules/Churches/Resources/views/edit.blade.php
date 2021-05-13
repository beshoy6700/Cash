@extends('layouts.modern.app')
@section('title','تعديل'." ". $church->name)
@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header row">
        <div class="content-header-left col-md-6 col-12 mb-1">
            <h2 class="content-header-title">قسم الكنائس</h2>
        </div>
        <div class="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-12">
            <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                    {{ Breadcrumbs::render('edit_church', $church) }}
                </ol>
            </div>
        </div>
    </div>
    <div class="row match-height">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title text-center"  id="basic-layout-round-controls"> تعديل {{$church->name}}</h4>
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
                        {!! Form::model($church, array('method' =>'PATCH','class'=>'form-horizontal','files'=>true,'role'=>'form',
                  'route'=>['admin.churches.update', $church->id])) !!}
                        @csrf
                        <div class="form-body">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="name">اسم الكنيسة</label>
                                        {!! Form::text('name',null,array('required','id'=>'name','class'=>'form-control round','placeholder'=>'ادخل اسم الكنيسة','autocomplete'=>'off')) !!}
                                        @error('name')
                                        <span class="text-danger">{{$message}}</span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="address">العنوان</label>
                                        {!! Form::text('address',null,array('required','id'=>'abbr','class'=>'form-control round','placeholder'=>'العنوان','autocomplete'=>'off')) !!}
                                        @error('address')
                                        <span class="text-danger">{{$message}}</span>
                                        @enderror
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label for="mobile">رقم الموبايل</label>
                                        {!! Form::text('mobile',null,array('required','id'=>'mobile','class'=>'form-control round','placeholder'=>'رقم الموبايل')) !!}
                                        @error('mobile')
                                        <span class="text-danger">{{$message}}</span>
                                        @enderror
                                    </div>
                                </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="phone"> رقم الموبايل 2</label>
                                            {!! Form::text('phone',null,array('id'=>'mobile','class'=>'form-control round','placeholder'=>'رقم الموبايل')) !!}
                                            @error('phone')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                    </div>
                                <div class="col-4">
                                    <label for="active">الحالة</label>
                                    <div class="form-group">
                                        <label class="switch">
                                            <input type="checkbox" class="default" name="active" value="1"  @if($church->active == 1) checked @endif >
                                            <span class="slider round"></span>
                                        </label>
                                        @error("active")
                                        <span class="text-danger">{{$message}}</span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary">
                                    <i class="la la-check-square-o"></i>  تعديل
                                </button>
                                <a href="{{route('admin.churches')}}" class="btn btn-warning mr-1">
                                    <i class="ft-x"></i> الغاء
                                </a>
                            </div>
                            {!! Form::close() !!}
                        </div>
                    </div>
                </div>
            </div>
@endsection
