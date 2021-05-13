@extends('layouts.modern.app')
@section('title','تعديل '. $safe->name)
@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">قسم إعدادت البرنامج</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        {{ Breadcrumbs::render('edit_safe',$safe) }}
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <div class="container-fluid">
        <div class="row">
            <!-- left column -->
            <div class="col-md-12">
                <!-- general form elements -->
                <div class="card card-info">
                    <div class="card-header">
                        <h3 class="card-title text-center"><strong> تعديل {{$safe->name}} </strong></h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    {!! Form::model($safe, array('method' =>'PATCH','class'=>'form-horizontal','files'=>true,'role'=>'form',
                   'route'=>['safes.update', $safe->id])) !!}
                    @csrf
                    <div class="card-body">
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
                                    <label for="company_id">الفرع</label>
                                    {!! Form::select("company_id",$companies,null,array('required','class'=>'form-control round select2','placeholder'=>'اختار المحافظة','autocomplete'=>'off')) !!}
                                </div>
                                @error("company_id")
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <label for="active">الحالة </label>
                                <div class="form-group">
                                    <label class="switch ">
                                        <input type="checkbox" class="default" name="active" value="1"  @if($safe->active == 1) checked @endif >
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                                @error('active')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <button type="submit" class="btn btn-info">تعديل</button>
                    </div>
                    {!! Form::close() !!}
                </div>
                <!-- /.card -->
@endsection
