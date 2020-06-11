$(document).ready(function($){
  // Active Class
	$(".mainmenu ul li").click(function () {
		$("ul li").removeClass("active");
		$(this).addClass("active");
	});
  // Progress Bar
	$("#webdesign").circleProgress({
		value: 0.9,
		size: 150,
		fill: "#30bae7",
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('.prgbar-parcent').html(Math.round(90 * progress) + '<i>%</i>');
	});
	$("#htmlcss").circleProgress({
		value: 0.75,
		size: 150,
		fill: "#d74680",
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('.prgbar-parcent').html(Math.round(75 * progress) + '<i>%</i>');
	});
	$("#graphicdesign").circleProgress({
		value: 0.7,
		size: 150,
		fill: "#15c7a8",
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('.prgbar-parcent').html(Math.round(70 * progress) + '<i>%</i>');
    });
    $("#uiux").circleProgress({
		value: 0.85,
		size: 150,
		fill: "#eb7d4b",
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('.prgbar-parcent').html(Math.round(85 * progress) + '<i>%</i>');
	});
 // Isotope
    $(".isotope-menu li").on('click', function() {
		var filterData = $ (this).attr("data-filter");
		$(".project-list").isotope({
			filter: filterData
		});
  // Isotope Active
  $(".isotope-menu li").removeClass("active");
  $(this).addClass("active");
  });
 });