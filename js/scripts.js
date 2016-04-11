var mainPageModel = (function() {
	var root = {};
	var activeTabClass = "active-tab";
	var activeTabContentClass ="active-tab";
	var templatePopularService = "<div class='col-xs-12 col-sm-12 col-md-6 col-lg-4'><div class='media'>" +
        "<a class='media-left' href='#''><img class='media-object' src='./assets/<%= service.pictureFileName %>' />" +
        "</a><div class='media-body'><h4 class='media-heading'><%= service.title %></h4><span><%= service.body %></span></div></div></div>";
	var templatePopularServiceString = "<% _.each(services, function (service){ %>" + templatePopularService + " <%});%>";        
    var popularServices = [{title: "Невролог", body: "Лечение и профилактика расстройств нервной системы и невротических состояний", pictureFileName:"medStat.svg"}, 
    					   {title: "Семейный психолог", body: "Помощь при конфликтах между родителями, между детьми и родителями, и другими родственниками", pictureFileName:"medbook.svg"},
    					   {title: "Детский психолог", body: "Помощь при конфликтах между родителями, между детьми и родителями, и другими родственниками", pictureFileName:"child.svg"},
    					   {title: "Психотерапевт", body: "Лечение и профилактика расстройств нервной системы и невротических состояний", pictureFileName:"medBookOrange.svg"}, 
    					   {title: "Мануальный терапевт", body: "Воздействие на мышцы, суставы, позвоночник, связки пациента, осуществляемое руками врача", pictureFileName:"medicine.svg"},
    					   {title: "Остеопат", body: "Различные виды массажа, помощь при болях в спине и нарушениях осанки", pictureFileName:"medLogo.svg"}];

	root.setActiveContactTab = function(tab) {
		if (tab) {
			var objectTab = $(tab);
			// set tab visibility.
			if (!objectTab.hasClass(activeTabClass)) {
				objectTab.siblings().removeClass(activeTabClass)
				objectTab.addClass(activeTabClass);
			}
			var contentTabId = objectTab.data("tab");
			if (contentTabId) {
				var objectContentTab = $("#" + contentTabId);
				if (objectContentTab.length > 0) {
					objectContentTab.siblings().removeClass(activeTabContentClass);
					$("#" + contentTabId).addClass(activeTabContentClass);
				}
			}
		}
	}

	root.initLayout = function() {
		//init carousel.
		$(".carousel").carousel({ interval: 5000 });

		// populate services.
		var servicesMarkup = _.template(templatePopularServiceString, {services: _.first(popularServices,3)});
		servicesMarkup = servicesMarkup + "<div class='clearfix hidden-md-down'></div>" + _.template(templatePopularServiceString, {services: _.last(popularServices,3)});
		$(servicesMarkup).appendTo($(".popular-services-row"));

		// clear modal dialog.
		$("#enroll-modal").on("show.bs.modal", function() {
			$("#nameInputDialog").val("");
			$("#phoneInputDialog").val("");
			$("#reasonInputDialog").val("");
		});
	}

	root.enroll = function() {
		var modalObject = $("#enroll-modal");
		// processing fields.		
		// hide modal after processing.
		modalObject.modal('hide');
	}

	return root;
})();