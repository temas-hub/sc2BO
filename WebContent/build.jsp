<%@page import="sc2build.optimizer.SC2Planner"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript" src="./js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="./js/jquery-ui-1.8.21.custom.min.js"></script>
<link rel="stylesheet" href="./css/ui-lightness/jquery-ui-1.8.21.custom.css">
<link rel="stylesheet" href="./css/ui.css">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Build Optimizer</title>
</head>
<body>
<div id='tabs'>
<ul><% 
SC2Planner.initLoader(this.getServletContext().getRealPath("/js/data.js"));
for(SC2Planner.Faction f : SC2Planner.Faction.values()){
	%><li><a href="#<%=f%>"><%=f%></a></li><%
}
%></ul><%
for(SC2Planner.Faction f : SC2Planner.Faction.values()){
	%><div id='<%=f%>'><h1><%=f%></h1><form name='<%=f%>' action=optimize.jsp>
	<input type='hidden' name='factionName' value='<%=f%>'>
	<input type='submit'>
	<div class='itemContainer'><%
	int index =0;
	for(SC2Planner.Entity e :  f.getEnities()){
		if("hidden"==e.style)
			continue;
		index++;
		%><div class='item item<%=(index%3)%>'><img src="./images/<%=e.icon%>.png">
							<input maxlength="2" width="2" name='<%=e.name%>' type=text>
							<span><%=e.name%></span>
							</div><%
	}
	%></div>
	<input type='submit'>
	</form></div><%
}
%>
</div>
	<script type="text/javascript">
	$(function() {
		$( "#tabs" ).tabs();
	});
	</script>
</body>
</html>