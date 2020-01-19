import sys,os,re
import shutil
from html import escape


path="./src/"

def remove_route(name):
    f = open(path+"index.tsx", "r")
    content=f.read()
    if os.path.exists(path+'index.bak2'):
        os.remove(path+'index.bak2')
    f2 = open(path+"index.bak2", "w")
    f2.write(content)
    f2.close()

    line_arr=content.split("\n")
    line_count=0
    for line in line_arr:
        if re.search("import\s+"+name+"\s+from\s+'\./"+name+"/"+name+"'",line):
            line_arr.pop(line_count)
        line_count+=1
    line_count=0
    for line in line_arr:
        if re.search("\s*<Route\s+path=\"/"+name.lower()+"\"\s+component={"+name+"}\s*/>",line):
            line_arr.pop(line_count)
        line_count+=1
    f.close()
    f = open(path+"index.tsx", "w")
    f.write("\n".join(line_arr))
    f.close()


# -----------------------------------------Links--------------------------------------


def add_route_link(name):
    links = "\n"
    f = open(path+"index.tsx", "r")
    index_content = f.read()
    line_arr = index_content.split("\n")
    for line in line_arr:
        found=re.search("^\s*"+escape("<Route")+"\s+(exact\s+)?path=", escape(line))
        if found:
            route=re.search("\"(.+)\"",line).group()
            route=route[1:-1]
            links+="\t\t\t\t<Link to='"+route+"'>"+route[1:]+"</Link><br />\n"

    # print(links)
    content = '''
    import React from 'react';
    import { Link } from 'react-router-dom';

    var page = function (_this: any) {
        return (
            <div className="Routes">
                <h1 className="wel">Welcome</h1>
                <h2>'''+name+'''</h2><br />
                <Link to='/routes'>links</Link><br />
                '''+links+'''
                <input type="button" value="test" onClick={_this.guru} /><br />
            </div>
        )
    }
    export default page;
    '''
    w_path = path+name+"/"+name+"Html.tsx"
    print(w_path)
    f = open(w_path, "w")
    f.write(content)
    f.close()
    os.chmod(w_path, 0o775)


# -----------------------------------------MAIN--------------------------------------

def add_links():
    component = "Routes"
    if not os.path.exists(path+component):
        os.mkdir(path+component)
    add_route_link(component)  
for i in range(1,len(sys.argv)): 	
    component=sys.argv[i].capitalize()
    if(component=="App" or component=="Myservice" or component=="Not_found"):
        print(component+" component can't be removed")
        break
    print("Removing "+component)
    try:
        if os.path.exists(path+component):
            shutil.rmtree(path+component)
            remove_route(component)
            print("removed")
    except:
        print(component+" component already exists")
add_links()