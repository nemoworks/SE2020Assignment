* 后端程序入口类：BackendApplication

### 代码文档

~~~java
@RestController
@RequestMapping("/api")
public class DataController 
{
    @RequestMapping("/GET")
    public String getData() :将data.json中的数据发送到前端

    @RequestMapping("/POST")
    public void postData(@RequestBody Object jsonData) :从前端获取修改后的数据，按照json格式保存到data.json中
        
}

class Tool：工具类 
{ 
	public String stringToJSON(String strJson) :将普通字符串整理成json格式
    
    public String getSpaceOrTab(int tabNum) :辅助进行格式整理
}

~~~

