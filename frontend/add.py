import sys
import os
import re
import shutil
from html import escape

path = "./src/"

# -----------------------------------------JS--------------------------------------


def js(name):
    content = '''
import './'''+name+'''.scss';
import page from './'''+name+'''Html'
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");

class '''+name+''' extends Myservice {

    constructor(props:any) {
        super(props);
    }

     componentDidMount() {
        super.componentDidMount();
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    guru() {
         swal("hi","")
    }

    render() {
        return (
            page(this)
        )
    }
}

export default '''+name+''';
    '''
    w_path = path+name+"/"+name+".tsx"
    print(w_path)
    f = open(w_path, "w")
    f.write(content)
    f.close()
    os.chmod(w_path, 0o775)

# -----------------------------------------HTML--------------------------------------


def html(name):
    content = '''
import React from 'react';
import { Link } from 'react-router-dom';

var page = function (_this: any) {
    return (
        <div className="'''+name+'''">
            <h1 className="wel">Welcome</h1>
            <h2>'''+name+'''</h2><br />
            <Link to='/'>App</Link><br />
            <Link to='/routes'>links</Link><br />
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

# -----------------------------------------CSS--------------------------------------


def css(name):
    content = '''
.'''+name+''' {
    text-align: center;
    h2 {
        color: blue;
    }
}
'''
    w_path = path+name+"/"+name+".scss"
    print(w_path)
    f = open(w_path, "w")
    f.write(content)
    f.close()
    os.chmod(w_path, 0o775)

# -----------------------------------------ROUTE--------------------------------------


def add_route(name):
    f = open(path+"index.tsx", "r")
    content = f.read()
    if os.path.exists(path+'index.bak'):
        os.remove(path+'index.bak')
    f2 = open(path+"index.bak", "w")
    f2.write(content)
    f2.close()

    line_arr = content.split("\n")
    line_count = 0
    for line in line_arr:
        if not re.search("^import", line):
            line_arr.insert(line_count, "import "+name +
                            " from './"+name+"/"+name+"';")
            break
        line_count += 1
    line_count = 0
    found = False
    for line in line_arr:
        if re.search("^\s*"+escape("<Route path="), escape(line)):
            found = True
        else:
            if found == True:
                line_arr.insert(line_count, "\t\t\t\t<Route path=\"/" +
                                name.lower()+"\" component={"+name+"} />")
                break
        line_count += 1
    f.close()
    f = open(path+"index.tsx", "w")
    f.write("\n".join(line_arr))
    f.close()
    os.chmod(path+"index.tsx", 0o775)

# -----------------------------------------Links--------------------------------------


def add_route_link(name):
    # folders = [x for x in os.listdir(path) if not re.search("\.+", x)]
    # for component in folders:
    #     links += "\t\t\t<Link to='/"+component+"'>"+component+"</Link><br />\n"
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
    js(component)
    css(component)
    add_route_link(component)  


for i in range(1, len(sys.argv)):
    component = sys.argv[i].capitalize()
    if(component=="App" or component=="Myservice" or component=="Not_found"):
        print(component+" component can't be created")
        break
    # if os.path.exists(path+component):
    #     shutil.rmtree(path+component)
    print("Creating "+component)
    try:
        os.mkdir(path+component)
        js(component)
        html(component)
        css(component)
        add_route(component)
        print()
    except Exception as e:
        print(str(e))

add_links()