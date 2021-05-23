<footer class="footer footer-static footer-dark navbar-border navbar-shadow">
    <p class="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
      <span class="float-md-left d-block d-md-inline-block">جميع حقوق الطبع والنشر محفوظة &copy; 2020 <a
              class="text-bold-800 grey darken-2" href="/"
              target="_blank">,{{config('app.name')}} </a> . </span>
        <i class="ft-heart pink"></i> كاش للتمويل متناهي الصغر <i class="ft-heart pink"></i>
    </p>
</footer>
<!-- BEGIN VENDOR JS-->
<script src="{{asset('modern/app-assets/vendors/js/vendors.min.js')}}" type="text/javascript"></script>
<!-- BEGIN VENDOR JS-->
<script src="{{asset('modern/app-assets/vendors/js/tables/datatable/datatables.min.js')}}"
        type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/tables/datatable/dataTables.buttons.min.js')}}"
        type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/forms/toggle/bootstrap-switch.min.js')}}"
        type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/forms/toggle/bootstrap-checkbox.min.js')}}"
        type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/forms/toggle/switchery.min.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/js/scripts/forms/switch.js')}}" type="text/javascript"></script>

<!-- BEGIN PAGE VENDOR JS-->
<script type="text/javascript" src="{{asset('modern/app-assets/vendors/js/ui/jquery.sticky.js')}}"></script>
<script type="text/javascript" src="{{asset('modern/app-assets/vendors/js/charts/jquery.sparkline.min.js')}}"></script>
<script type="text/javascript"
        src="{{asset('modern/app-assets/vendors/js/forms/select/select2.full.min.js')}}"></script>
<script src="{{asset('modern/app-assets/js/scripts/forms/select/form-select2.js')}}" type="text/javascript"></script>
<!-- END PAGE VENDOR JS-->
<!-- BEGIN PAGE VENDOR JS-->
<script src="{{asset('modern/app-assets/vendors/js/charts/chart.min.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/charts/echarts/echarts.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/extensions/datedropper.min.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/extensions/timedropper.min.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/forms/icheck/icheck.min.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/js/scripts/pages/chat-application.js')}}" type="text/javascript"></script>
<!-- END PAGE VENDOR JS-->
<!-- BEGIN MODERN JS-->
<script src="{{asset('modern/app-assets/js/core/app-menu.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/js/core/app.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/js/scripts/customizer.js')}}" type="text/javascript"></script>

<!-- END MODERN JS-->
<!-- BEGIN PAGE LEVEL JS-->
<script src="{{asset('modern/app-assets/js/scripts/pages/dashboard-crypto.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/js/scripts/tables/datatables/datatable-basic.js')}}"
        type="text/javascript"></script>
<script src="{{asset('modern/app-assets/js/scripts/extensions/date-time-dropper.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/js/scripts/forms/checkbox-radio.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/js/scripts/modal/components-modal.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/ui/headroom.min.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/forms/repeater/jquery.repeater.min.js')}}"
        type="text/javascript"></script>
<script src="{{asset('modern/app-assets/js/scripts/forms/form-repeater.js')}}" type="text/javascript"></script>
<!-- END PAGE LEVEL JS-->

<script src="{{asset('modern/app-assets/app-assets/vendors/js/ui/headroom.min.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/extensions/jquery.steps.min.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/forms/validation/jquery.validate.min.js')}}"
        type="text/javascript"></script>
<script src="{{asset('modern/app-assets/js/scripts/forms/wizard-steps.js')}}" type="text/javascript"></script>

<script src="{{asset('modern/main/js/plugin.js')}}" type="text/javascript"></script>
<script>
    $('#meridians1').timeDropper({
        meridians: true,
        setCurrentTime: false
    });
    $('#meridians2').timeDropper({
        meridians: true, setCurrentTime: false

    });
    $('#meridians3').timeDropper({
        meridians: true,
        setCurrentTime: false
    });
    $('#meridians4').timeDropper({
        meridians: true,
        setCurrentTime: false
    });
    $('#meridians5').timeDropper({
        meridians: true, setCurrentTime: false

    });
    $('#meridians6').timeDropper({
        meridians: true, setCurrentTime: false
    });
    $('#meridians7').timeDropper({
        meridians: true, setCurrentTime: false
    });
    $('#meridians8').timeDropper({
        meridians: true, setCurrentTime: false
    });
    $('#meridians9').timeDropper({
        meridians: true, setCurrentTime: false
    });
    $('#meridians10').timeDropper({
        meridians: true, setCurrentTime: false
    });
    $('#meridians11').timeDropper({
        meridians: true, setCurrentTime: false
    });
    $('#meridians12').timeDropper({
        meridians: true, setCurrentTime: false
    });
    $('#meridians13').timeDropper({
        meridians: true, setCurrentTime: false
    });
    $('#meridians14').timeDropper({
        meridians: true, setCurrentTime: false
    });
</script>
@yield('script')
