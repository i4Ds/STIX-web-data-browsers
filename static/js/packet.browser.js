$(function() {

	window.totalPackets=0;
	window.packetIDList=[];

	$( "#reqform" ).submit(function( event ) {
		event.preventDefault();
		//ajax request

		var utc=$('#utc-input').val();
		var span=$('#span-input').val();
		var spid=$('#spid-input').val();
		var selValue = $("input[type='radio']:checked").val();
		//console.log(spid);
		if (utc==''|| (typeof utc ==='undefined')|| span=='' ||(typeof span ==='undefined'))
		{
			alert('Start time or time span empty!');

		}
		else if(selValue=='SPID' &&spid=='')
		{
			alert('SPID can not be empty!');
		}
		else
		{

			$('#headerTreeView tbody').empty();
			$('#leftloader').show();
			$('#msg').html('Requesting packets ...');
			$.ajax({
				url: '/request/headers/pid-tw',
				type:"POST",
				dataType:"json",
				data: $("#reqform").serialize(),
				success: function (data) {
					$('#leftloader').hide();
					displayStixHeaders(data);
					$('#file-info').html('');

				}

			});
		}


	});

	$('.form_datetime').datetimepicker( {format: "yyyy-mm-ddThh:ii:ss"});
	$( ".radio-group" ).change(function() {
		switch($(this).val()) {
			case 'SPID' :
				$("#service-option").attr("readonly", true);
				$("#spid-input").attr("readonly", false);
				break;
			case 'service' :
				$("#service-option").attr("readonly", false);
				$("#spid-input").attr("readonly", true);
				break;
			case 'TC' :
				$("#service-option").attr("readonly", true);
				$("#spid-input").attr("readonly", true);
				break;
		}            
	});
	$("#search").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#headerTreeView tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	$("#headerTreeView").on('click','tr',function(e){
		var headerId=this.id;
		$(this).addClass("selected").siblings().removeClass("selected"); 
		loadStixPacket(headerId);
		$('#msg').html("Packet #"+($(this).index()+1));
	});

	$("#packetTreeView").treetable({
		expandable:     true,
		onNodeExpand:   nodeExpand,
		onNodeCollapse: nodeCollapse
	});

	// expand node with ID "1" by default
	$("#packetTreeView").treetable("reveal", '1');
	// Highlight a row when selected
	$("#packetTreeView tbody").on("mousedown", "tr", function() {
		$(".selected").not(this).removeClass("selected");
		$(this).toggleClass("selected");
	});

	function loadPacketsOfFile(fileId){
		$('#msg').html('Requesting packets of file #'+fileId+'...');
		$('#leftloader').show();
		$.ajax({
			url: '/request/headers/file/'+fileId,
			type:"GET",
			dataType:"json",
			success: function (data) {
				$('#leftloader').hide();

				$('#file-info').html('File:'+data['filename']);
				if(data['idb']!='unknown'){
					$('#file-info').append(', IDB:'+data['idb']);
				}
				if(data['filesize']){

					if(data['filesize']>0)
					{
						filesize=Math.floor(data['filesize']/1024.)
						$('#file-info').append(', size '+filesize+' kiB');
					}
				}

				$('#file-info').append('; ');
				displayStixHeaders(data,'#headerTreeView');

			}
		});

	}
	function loadPacketsOfCalibrationRun(calibrationId){
		$('#msg').html('Requesting packets of calibration run #'+calibrationId+'...');
		$('#leftloader').show();
		$.ajax({
			url: '/request/headers/calibration/'+calibrationId,
			type:"GET",
			dataType:"json",
			success: function (data) {
				$('#file-info').html('');
				$('#leftloader').hide();
				displayStixHeaders(data,'#headerTreeView');
				$('#msg').html('Showing packet(s) of calibration run #'+calibrationId)
			}

		});

	}



	if(packetId>=0)
	{

		loadStixPacket(packetId,true);
	}
	else if(calibrationId>=0)
	{
		loadPacketsOfCalibrationRun(calibrationId);

	}
	else if(fileId>=0)
	{
		loadPacketsOfFile(fileId);
	}
	else
	{
		loadStixLatestPacketHeaders(5,200);
	}



});




