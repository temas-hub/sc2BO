<%@page import="sc2build.optimizer.Entity"%>
<%@page import="sc2build.data.Faction"%>
<%@page import="sc2build.optimizer.BuildOptimizer.Node"%>
<%@page import="java.util.LinkedList"%>
<%@page import="java.util.List"%>
<%@page import="sc2build.optimizer.BuildOptimizer"%>
<%@page import="sc2build.optimizer.SC2Planner"%>
<%@page import="java.util.Map"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script type="text/javascript" src="./js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="./js/jquery-ui-1.8.21.custom.min.js"></script>
<link rel="stylesheet" href="./css/ui-lightness/jquery-ui-1.8.21.custom.css">
<link rel="stylesheet" href="./css/ui.css">
<title>Found Builds</title>
</head>
<body>
<%
Faction.initLoader(this.getServletContext().getRealPath("/js/data.js"));
Faction f = Faction.valueOf(request.getParameter("factionName"));

List<Entity> req = new LinkedList<Entity>();

for(Map.Entry<String,String[]> i : request.getParameterMap().entrySet()){
	if(i.getValue().length>0 && i.getValue()[0].length()>0){
		Entity et = f.getEntityByName(i.getKey());
		if(et!=null){
			for(int j=0;j<Integer.parseInt(i.getValue()[0]);j++){
				req.add(et);
			}
		}
	}
}

BuildOptimizer bo = new BuildOptimizer(f,-1);
bo.buildRaceTree(f, req);

if(bo.getMinNode()!=null){
	List<Node> builds = bo.getMinNode();
	for(Node n : builds){
		Node start = n;
		List<Node> e = new LinkedList<Node>();
		while(n!=null){
			if(n.getEntity()!=null)
				e.add(0, n);
			n = n.getParent();
		}
		int index =0;
		StringBuilder bpLink = new StringBuilder(""+f.getName().charAt(0));
		%><div class='items itemsResult'>
		   <ul>
		   	<li>Left - Minerals:  <%=start.getMinerals() %></li>
		   	<li>Left - Gas: <%=start.getGas() %></li>
		   	<li>Food: <%=start.getFood() %>/<%=start.getFoodAmount() %> </li>
		   </ul>
		<%
				for(Node ne : e){
					index++;
					bpLink.append(ne.getEntity().save);
					%><div class='item item<%=(index%3)%>'><img src="./images/<%=ne.getEntity().icon%>.png"><div>
										<span><%=ne.getEntity().name%></span>
										<span class='time'><%=BuildOptimizer.time(ne.getTime()-ne.getEntity().time)%></span> ... 
										<span class='time'><%=BuildOptimizer.time(ne.getTime())%></span></div>
										</div><%
				}
		%>
		<a href="http://www.sc2planner.com/#<%=bpLink%>">View details</a>
		</div>
		<%
	}
	}
%>
</body>
</html>