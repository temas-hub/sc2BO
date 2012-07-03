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
<title>Insert title here</title>
</head>
<body>
<%
Faction.initLoader(this.getServletContext().getRealPath("/js/data.js"));
Faction f = Faction.valueOf(request.getParameter("factionName"));

SC2Planner planner = new SC2Planner();
planner.init(f);
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

BuildOptimizer bo = new BuildOptimizer(planner,-1);
bo.buildRaceTree(f, req);

if(bo.getMinNode()!=null){
	Node n = bo.getMinNode();
	List<Node> e = new LinkedList<Node>();
	while(n!=null){
		if(n.getEntity()!=null)
			e.add(0, n);
		n = n.getParent();
	}
	int index =0;
	StringBuilder bpLink = new StringBuilder(""+f.getName().charAt(0));
	%><div class='items itemsResult'><%
			for(Node ne : e){
				index++;
				bpLink.append(ne.getEntity().save);
				%><div class='item item<%=(index%3)%>'><img src="./images/<%=ne.getEntity().icon%>.png">
									<span><%=ne.getEntity().name%></span>
									<span class='time'><%=(ne.getTime()-ne.getEntity().time)/100/60%>:<%=((ne.getTime()-ne.getEntity().time)/100)%60%></span>
									<span class='time'><%=ne.getTime()/100/60%>:<%=(ne.getTime()/100)%60%></span>
									</div><%
			}
	%></div>
	<a href="http://www.sc2planner.com/#<%=bpLink%>">View details</a><%
}
%>
</body>
</html>