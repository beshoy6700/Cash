@extends('layouts.modern.app')
@section('title','قائمة تصنيف المصروفات')
@section('content')
    <div class="container">
        <div class="content-header row">
            <div class="content-header-left col-md-6 col-12 mb-1">
                <h2 class="content-header-title"> قسم الادارة المالية</h2>
            </div>
            <div class="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-12">
                <div class="breadcrumb-wrapper col-12">
                    <ol class="breadcrumb">
                        {{ Breadcrumbs::render('expensives') }}
                    </ol>
                </div>
            </div>
        </div>
        <div class="row match-height">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title text-center" id="basic-layout-round-controls">
                            <strong>قائمة تصنيف المصروفات</strong></h4>
                        <div>
                            <br>
                            <a href="{{route('expensives.create')}}" class="btn btn-danger round btn-sm">
                                <i class="la la-plus font-small-2"></i>إضافة تصنيف ايراد جديدة</a>
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
                            <table class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>اسم الشركة</th>
                                    <th>الوصف</th>
                                    <th>عدد الفروع</th>
                                    <th>الحالة</th>
                                    <th>التحكم</th>
                                </tr>
                                </thead>
                                <tbody>
                                @isset($expensives)
                                    @foreach($expensives as $key => $expensive)
                                        <tr>
                                            <td>{{$key+1}}</td>
                                            <td>{{$expensive -> name}}</td>
                                            <td>{{$expensive -> description}}</td>
                                            <td>{{$expensive -> count_sub()}}</td>
                                            <td>
                                                @if($expensive->getStatus() == 'مفعل')
                                                    <span class="badge bg-success">{{$expensive->getStatus()}}</span>
                                                @else
                                                    <span class="badge bg-danger">{{$expensive->getStatus()}}</span>
                                                @endif
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group"
                                                     aria-label="Basic example">
                                                    <a href="{{route('expensives.edit', $expensive->id)}}"
                                                       class="btn btn-outline-primary btn-min-width box-shadow-3 mr-1 mb-1">تعديل</a>
                                                    <a href="{{route('expensives.status', $expensive->id)}}"
                                                       class="btn btn-outline-warning btn-min-width box-shadow-3 mr-1 mb-1">
                                                        @if($expensive->status == 0)
                                                           تفعيل
                                                        @else
                                                          إلغاء التفعيل
                                                        @endif
                                                    </a>
                                                    {!! Form::open(['method'=>'DELETE','class'=>'form-check-inline','route'=>['expensives.destroy',$expensive->id] ]) !!}
                                                    {!! Form::button('حذف', ['class'=>'btn btn-outline-danger btn-min-width box-shadow-3 mr-1 mb-1 confirm','type'=>'submit']) !!}
                                                    {!! Form::close() !!}
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                @endisset
                                </tbody>
                            </table>

                        </div>
                        {{ $expensives->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Content Header (Page header) -->
@endsection
