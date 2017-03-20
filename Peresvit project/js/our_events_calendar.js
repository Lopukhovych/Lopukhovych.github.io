init();

function init() {
    scheduler.config.xml_date="%Y-%m-%d %H:%i";
    scheduler.init('scheduler_here',new Date(2017,2,20),"day");

    let events = [
        {"id":"2","text":"8 марта","start_date":"2017-03-08 12:00","end_date":"2017-03-08 12:00","assignedToMe":"false","eventtype":"COMPETITION"},
        {"id":"3","text":"1 мая","start_date":"2017-03-25 12:00","end_date":"2017-03-25 12:00","assignedToMe":"false","eventtype":"COMPETITION"}];

    scheduler.parse(events, "json");//takes the name and format of the data source
    scheduler.load(events,function(){

        scheduler.renderCalendar({
            container:"mini_here",
            date:scheduler._date,
            navigation:true,
            // handler:function(date,calendar){
            // 	dhtmlx.alert(String(date));
            // }
        });
    });

}
	