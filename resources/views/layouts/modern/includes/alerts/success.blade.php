@if(Session::has('success'))
<div class="alert round bg-success alert-icon-left alert-arrow-left alert-dismissible mb-2"
     role="alert">
    <span class="alert-icon"><i class="la la-thumbs-o-up"></i></span>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <strong>  {{Session::get('success')}}</strong>
</div>
@endif
