@extends('layouts.modern.app')
@section('title', 'تعديل  '. $income->name)
@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">
                        <strong>قسم الادارة المالية</strong>
                    </h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        {{ Breadcrumbs::render('edit_company',$income) }}
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
                            <strong> تعديل {{$income->name}} </strong>
                        </h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    {!! Form::model($income, array('method' =>'PATCH','class'=>'form-horizontal','files'=>true,'role'=>'form',
                   'route'=>['companies.update', $income->id])) !!}
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
                                           @if($income->status == 1) checked @endif/>
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
                                    <label for="parent_id">الشركات</label>
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
