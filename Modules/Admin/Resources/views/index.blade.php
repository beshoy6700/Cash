@extends('layouts.modern.app')
@section('title','الرئيسية')
@section('content')
    {{$dataTable->table()}}

    @push('scripts')
        {{$dataTable->scripts()}}
    @endpush
@endsection
