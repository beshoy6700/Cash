@extends('layouts.modern.app')
@section('title',__('admin/table/control.edit')." ". $admin->name)
@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header row">
        <div class="content-header-left col-md-6 col-12 mb-1">
            <h2 class="content-header-title">قسم الكنائس</h2>
        </div>
        <div class="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-12">
            <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                    {{ Breadcrumbs::render('edit_profile', $admin) }}
                </ol>
            </div>
        </div>
    </div>
    <div class="row match-height">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title text-center"  id="basic-layout-round-controls"> @lang('admin/table/control.edit') {{$admin->name}}</h4>
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
                        {!! Form::model($admin, array('method' =>'PATCH','class'=>'form-horizontal','files'=>true,'role'=>'form',
                  'route'=>['admin.profile.update', $admin->id])) !!}
                        @csrf
                        <div class="form-body">
                            <input type="hidden" name="id" value="{{$admin->id}}">
                            <div class="row">
                                <div class="form-group col-md-6 col-sm-12">
                                    <label class="label-control" for="name">@lang('admin::index.name') </label>
                                    <div class="position-relative has-icon-left">
                                        {!! Form::text('name',null,array('required','id'=>'name','class'=>'form-control round','placeholder'=>__('admin::index.name'),'autocomplete'=>'off')) !!}
                                        <div class="form-control-position">
                                            <i class="ft-user"></i>
                                        </div>
                                        @error('name')
                                        <span class="text-danger">{{$message}}</span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="form-group col-md-6 col-sm-12">
                                    <label class="label-control" for="email">@lang('admin::index.email')</label>
                                    <div class="position-relative has-icon-left">
                                        {!! Form::email('email',null,array('required','id'=>'email','class'=>'form-control round','placeholder'=>__('admin::index.email'),'autocomplete'=>'off')) !!}
                                        <div class="form-control-position">
                                            <i class="ft-message-square"></i>
                                        </div>
                                        @error('email')
                                        <span class="text-danger">{{$message}}</span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6 col-sm-12">
                                    <label class="label-control" for="password">@lang('admin::index.password') </label>
                                    <div class="position-relative has-icon-left">
                                        <input type="password" name="password" class="form-control round" placeholder="{{__('admin::index.password')}}" autocomplete="autocomplete">
                                        <div class="form-control-position">
                                            <i class="la la-briefcase"></i>
                                        </div>
                                        @error('password')
                                        <span class="text-danger">{{$message}}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group col-md-6 col-sm-12">
                                    <label class="label-control" for="password_confirmation">@lang('admin::index.password_confirm') </label>
                                    <div class="position-relative has-icon-left">
                                        <input type="password" name="password_confirmation" class="form-control round" placeholder="{{__('admin::index.password')}}" autocomplete="autocomplete">
                                        <div class="form-control-position">
                                            <i class="la la-phone"></i>
                                        </div>
                                        @error('password_confirmation')
                                        <span class="text-danger">{{$message}}</span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary">
                                    <i class="la la-check-square-o"></i>  تعديل
                                </button>
                                <a href="{{route('admin.dashboard')}}" class="btn btn-warning mr-1">
                                    <i class="ft-x"></i> الغاء
                                </a>
                            </div>
                            {!! Form::close() !!}
                        </div>
                    </div>
                </div>
            </div>
@endsection
