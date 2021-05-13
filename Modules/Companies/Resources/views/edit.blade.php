@extends('layouts.modern.app')
@section('title', 'تعديل  '. $company->name)
@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">
                        <strong>قسم الشركات</strong>
                    </h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        {{ Breadcrumbs::render('edit_company',$company) }}
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
                            <strong> تعديل {{$company->name}} </strong>
                        </h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    {!! Form::model($company, array('method' =>'PATCH','class'=>'form-horizontal','files'=>true,'role'=>'form',
                   'route'=>['companies.update', $company->id])) !!}
                    @csrf
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="name">الاسم </label>
                                    {!! Form::text('name',null,array('required','class'=>'form-control round','placeholder'=>'اسم الشركة','autocomplete'=>'off')) !!}
                                </div>
                                @error('name')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="mobile">الايميل</label>
                                    {!! Form::email("email",null,array('class'=>'form-control round','placeholder'=>'الايميل','autocomplete'=>'email')) !!}
                                </div>
                                @error("email")
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="mobile">رقم الموبايل</label>
                                    {!! Form::text("mobile",null,array('class'=>'form-control round','placeholder'=>'رقم الموبايل','autocomplete'=>'phone')) !!}
                                </div>
                                @error('mobile')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="phone">رقم التليفون</label>
                                    {!! Form::text("phone",null,array('class'=>'form-control round','placeholder'=>'رقم التليفون','autocomplete'=>'phone')) !!}
                                </div>
                                @error("mobile")
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="slug">slug</label>
                                    {!! Form::text("slug",null,array('required','class'=>'form-control round','placeholder'=>'slug')) !!}
                                </div>
                                @error("slug")
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-md-6">
                                <div class="form-group mt-1">
                                    <input type="checkbox" value="1"
                                           name="status" id="status" class="switchery" data-color="success"
                                           @if($company->status == 1) checked @endif/>
                                    <label for="active"
                                           class="card-title ml-1">الحالة </label>
                                    @error("active")
                                    <span class="text-danger">{{$message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="city_id">المركز</label>
                                    {!! Form::select("city_id",$cities,null,array('class'=>'form-control round select2','placeholder'=>'المركز','autocomplete'=>'off')) !!}
                                </div>
                                @error("city_id")
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="area_id">المنطقة</label>
                                    {!! Form::select("area_id",$areas,null,array('class'=>'form-control round select2','placeholder'=>'المنطقة','autocomplete'=>'off')) !!}
                                </div>
                                @error("area_id")
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <img src="{{$company->logo}}" class="img-thumbnail" style="height:200px" alt="{{$company->name}}">
                                <div class="form-group">
                                    <label>اللوجو</label>
                                    <label id="logo" class="file center-block">
                                        <input type="file" id="logo" name="logo">
                                        <span class="file-custom"></span>
                                    </label>
                                </div>
                                @error("logo")
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="address">العنوان </label>
                                    {!! Form::textarea('address',null,array('class'=>'form-control round','placeholder'=>'العنوان','autocomplete'=>'address')) !!}
                                </div>
                                @error('address')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                        </div>
                        <div class="row hidden" id="cats_list">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="parent_id">الشركات</label>
                                    {!! Form::select("parent_id",$companies,null,array('class'=>'form-control round','placeholder'=>'الشركات','autocomplete'=>'off')) !!}
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
                                        مقر رئيسي
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
                                        مقر فرعي
                                    </label>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <button type="submit" class="btn btn-info">
                         تعديل
                        </button>
                    </div>
                    {!! Form::close() !!}
                </div>
                <!-- /.card -->
@endsection
                @section('script')

                    <script>
                        $('input:radio[name="type"]').change(
                            function () {
                                if (this.checked && this.value == '2') {  // 1 if main company - 2 if sub company
                                    $('#cats_list').removeClass('hidden');

                                } else {
                                    $('#cats_list').addClass('hidden');
                                }
                            });
                    </script>
@stop
