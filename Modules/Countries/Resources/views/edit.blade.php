@extends('layouts.modern.app')
@section('title', 'تعديل'.' '. $country->name)
@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">
                        <strong>@lang('admin/sidebar.sec.countries')</strong>
                    </h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        {{ Breadcrumbs::render('edit_country',$country) }}
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
                        <h3 class="card-title text-center">
                          <strong> @lang('admin/table/control.edit') {{$country->name}} </strong>
                        </h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    {!! Form::model($country, array('method' =>'PATCH','class'=>'form-horizontal','files'=>true,'role'=>'form',
                   'route'=>['countries.update', $country->id])) !!}
                    @csrf
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="name">@lang('countries::index.name')</label>
                                    {!! Form::text("name",null,array('required','class'=>'form-control round','placeholder'=>__('countries::index.name'),'autocomplete'=>'off')) !!}
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
                        <div class="col-md-6 col-sm-12">
                            <div class="form-group mt-1">
                                <input type="checkbox" value="1"
                                       name="active" id="active" class="switchery" data-color="success"
                                       @if($country->active == 1) checked @endif/>
                                <label for="active"
                                       class="card-title ml-1">@lang('countries::index.status') </label>
                                @error("active")
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <button type="submit" class="btn btn-info">
                            @lang('admin/table/control.update')
                        </button>
                    </div>
                    {!! Form::close() !!}
                </div>
                <!-- /.card -->
@endsection
