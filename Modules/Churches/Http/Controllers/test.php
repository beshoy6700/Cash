<div class="clear"></div>
<script src="{{skin url='js/camera.js'}}" type="text/javascript">// <![CDATA[

    // ]]></script>
<script type="text/javascript">// <![CDATA[
    jQuery(function(){
        jQuery('#camera_wrap').camera({
            alignmen: 'topCenter',
            height: '31.21%',
            minHeight: '100px',
            loader : false,
            navigation: true,
            fx: 'simpleFade',
            navigationHover:false,
            thumbnails: false,
            playPause: false,
            pagination:false,
        });
    });
    // ]]></script>
<div class="fluid_container_wrap">
    <div class="fluid_container">
        <div class="camera_wrap camera_orange_skin" id="camera_wrap">
            <div data-src="{{media url='wysiwyg/sahel.jpeg'}}">
                <div class="camera_caption fadeFromLeft">
                    <div class="lof_camera_title"></div>
                </div>
            </div>
            <div data-src="{{media url='wysiwyg/slide5.jpeg'}}">
                <div class="camera_caption fadeFromLeft">
                    <div class="lof_camera_title"></div>
                </div>
            </div>
            <div data-src="{{skin url='images/camera/slides/Slide4.png'}}">
                <div class="camera_caption fadeFromLeft">
                    <div class="lof_camera_title"></div>
                </div>
            </div>
            <div data-src="{{skin url='images/camera/slides/slide1.png'}}">
                <div class="camera_caption fadeFromLeft">
                    <div class="lof_camera_title"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="clear"></div>
