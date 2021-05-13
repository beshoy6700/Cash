@extends('layouts.modern.app')
@section('title',__('admin/sidebar.list.states'))
@section('content')
    <div class="container">
        <div class="content-header row">
            <div class="content-header-left col-md-6 col-12 mb-1">
                <h2 class="content-header-title text-dark">
                    <strong>@lang('admin/sidebar.sec.countries')</strong>
                </h2>
            </div>
            <div class="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-12">
                <div class="breadcrumb-wrapper col-12">
                    <ol class="breadcrumb">
                        {{ Breadcrumbs::render('states') }}
                    </ol>
                </div>
            </div>
        </div>
        <div class="row match-height">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title text-center" id="basic-layout-round-controls">
                            <strong>@lang('admin/sidebar.list.states')</strong></h4>
                        <div>
                            <br>
                            <a href="{{route('states.create')}}"
                               class="btn btn-danger round btn-sm">
                                <i class="la la-plus font-small-2"></i>@lang('admin/sidebar.add.state')</a>
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
                                    <th>@lang('states::index.state')</th>
                                    <th>@lang('states::index.country')</th>
                                    <th>slug</th>
                                    <th>@lang('states::index.status')</th>
                                    <th>@lang('states::index.control')</th>
                                </tr>
                                </thead>
                                <tbody>
                                @isset($states)
                                    @foreach($states as $key => $state)
                                        <tr>
                                            <td>{{$key+1}}</td>
                                            <td>{{$state->name}}</td>
                                            <td>{{$state->country->name}}</td>
                                            <td>{{$state->slug}}</td>
                                            <td>
                                                @if($state->getActive() == __('admin/table/control.active'))
                                                    <span class="badge bg-success">{{$state->getActive()}}</span>
                                                @else
                                                    <span class="badge bg-danger">{{$state->getActive()}}</span>
                                                @endif
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group"
                                                     aria-label="Basic example">
                                                    <a href="{{route('states.edit', $state->id)}}"
                                                       class="btn btn-outline-primary btn-min-width box-shadow-3 mr-1 mb-1">@lang('admin/table/control.edit')</a>
                                                {!! Form::open(['method'=>'DELETE','class'=>'form-check-inline','route'=>['states.destroy',$state->id] ]) !!}
                                                {!! Form::button(__('admin/table/control.delete'), ['class'=>'btn btn-outline-danger btn-min-width box-shadow-3 mr-1 mb-1 confirm','type'=>'submit']) !!}
                                                {!! Form::close() !!}
                                                    <a href="{{route('states.status', $state->id)}}"
                                                       class="btn btn-outline-warning btn-min-width box-shadow-3 mr-1 mb-1">
                                                        @if($state->active == 0)
                                                           @lang('admin/table/control.active')
                                                        @else
                                                            @lang('admin/table/control.deactivate')
                                                        @endif
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                @endisset
                                </tbody>
                            </table>
                            {{$states->links()}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Content Header (Page header) -->
@endsection
