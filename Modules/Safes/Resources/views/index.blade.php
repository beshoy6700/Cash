@extends('layouts.modern.app')
@section('title','قائمة الخزائن')
@section('content')
    <div class="container">
        <div class="content-header row">
            <div class="content-header-left col-md-6 col-12 mb-1">
                <h2 class="content-header-title">قسم إعدادت البرنامج</h2>
            </div>
            <div class="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-12">
                <div class="breadcrumb-wrapper col-12">
                    <ol class="breadcrumb">
                        {{ Breadcrumbs::render('safes') }}
                    </ol>
                </div>
            </div>
        </div>
        <div class="row match-height">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title text-center" id="basic-layout-round-controls"><strong>قائمة الخزائن</strong></h4>
                        <div>
                            <br>
                            <a href="{{route('safes.create')}}"
                               class="btn btn-danger round btn-sm">
                                <i class="la la-plus font-small-2"></i>إضافة خزينة</a>
                        </div>
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
                    <div class="card-body collapse show">
                        <div class="card-body card-dashboard">
                            <div class="card-text">
                                @include('layouts/modern/includes/alerts/success')
                                @include('layouts/modern/includes/alerts/error')
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered scroll-horizontal">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>الخزينة</th>
                                    <th>الفرع</th>
                                    <th>الحالة</th>
                                    <th>التحكم</th>
                                </tr>
                                </thead>
                                <tbody>
                                @isset($safes)
                                    @foreach($safes as $key => $safe)
                                        <tr>
                                            <td>{{$key+1}}</td>
                                            <td>{{$safe->name}}</td>
                                            <td>{{$safe->company->name}}</td>
                                            <td>
                                                @if($safe->getStatus() == 'مفعل')
                                                    <span class="badge bg-success">{{$safe->getStatus()}}</span>
                                                @else
                                                    <span class="badge bg-danger">{{$safe->getStatus()}}</span>
                                                @endif
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group"
                                                     aria-label="Basic example">
                                                    <a href="{{route('safes.edit', $safe->id)}}"
                                                       class="btn btn-outline-primary btn-min-width box-shadow-3 mr-1 mb-1">تعديل</a>
                                                {!! Form::open(['method'=>'DELETE','class'=>'form-check-inline','route'=>['safes.destroy',$safe->id] ]) !!}
                                                {!! Form::button('حذف', ['class'=>'btn btn-outline-danger btn-min-width box-shadow-3 mr-1 mb-1 confirm','type'=>'submit']) !!}
                                                {!! Form::close() !!}
                                                    <a href="{{route('safes.status', $safe->id)}}"
                                                       class="btn btn-outline-warning btn-min-width box-shadow-3 mr-1 mb-1">
                                                        @if($safe->status == 0)
                                                            تفعيل
                                                        @else
                                                            الغاء التفعيل
                                                        @endif
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                @endisset
                                </tbody>
                            </table>
                            {{$safes->links()}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Content Header (Page header) -->
@endsection
