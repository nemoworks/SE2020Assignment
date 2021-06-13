package com.se2020.backend.controller;

import com.alibaba.fastjson.JSON;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;

import org.apache.commons.io.FileUtils;

@RestController
@RequestMapping("/api")
public class DataController {

    @RequestMapping("/GET")
    public String getData() throws IOException {
        String path = System.getProperty("user.dir");
        path = path + "/data/data.json";
        System.out.println(path);
        File jsonFile = new File(path);
        return FileUtils.readFileToString(jsonFile);
    }

    @RequestMapping("/POST")
    public void postData(@RequestBody Object jsonData) throws IOException {
        String path = System.getProperty("user.dir");
        path = path + "/data/data.json";
        Tool tool=new Tool();
        File file=new File(path);
        if(file.exists()) {
            file.delete();
        }
        file.createNewFile();

        FileOutputStream fileOutputStream=new FileOutputStream(file);
        OutputStreamWriter outputStreamWriter=new OutputStreamWriter(fileOutputStream,"utf-8");
        BufferedWriter bufferedWriter= new BufferedWriter(outputStreamWriter);

        String jsonString=JSON.toJSONString(jsonData);
        String JsonString=tool.stringToJSON(jsonString);

        bufferedWriter.write(JsonString);
        bufferedWriter.flush();
        System.out.println("FLUSH SUCCESS");
        bufferedWriter.close();
    }
}

class Tool {

    private boolean isTab = true;

    public String stringToJSON(String strJson) {
        int tabNum = 0;
        StringBuffer jsonFormat = new StringBuffer();
        jsonFormat.append("{\n\"data\":");
        int length = strJson.length();
        for (int i = 0; i < length; i++) {
            char c = strJson.charAt(i);
            if (c == '{') {
                tabNum++;
                jsonFormat.append(c + "\n");
                jsonFormat.append(getSpaceOrTab(tabNum));
            } else if (c == '}') {
                tabNum--;
                jsonFormat.append("\n");
                jsonFormat.append(getSpaceOrTab(tabNum));
                jsonFormat.append(c);
            } else if (c == ',') {
                jsonFormat.append(c + "\n");
                jsonFormat.append(getSpaceOrTab(tabNum));
            } else {
                jsonFormat.append(c);
            }
        }
        jsonFormat.append("\n}");
        return jsonFormat.toString();
    }
    
    public String getSpaceOrTab(int tabNum) {
        StringBuffer sbTab = new StringBuffer();
        for (int i = 0; i < tabNum; i++) {
            if (isTab) {
                sbTab.append('\t');
            } else {
                sbTab.append("    ");
            }
        }
        return sbTab.toString();
    }
}
