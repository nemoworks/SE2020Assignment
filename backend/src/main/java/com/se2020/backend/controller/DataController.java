package com.se2020.backend.controller;

import com.alibaba.fastjson.JSONObject;
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
        File jsonFile = new File(this.getClass().getClassLoader().getResource("data.json").toString().substring(6));
        return FileUtils.readFileToString(jsonFile);
    }
    @RequestMapping("/POST")
    public void postData(@RequestBody JSONObject jsonData) throws IOException {
        Tool tool=new Tool();
        File file=new File("/data.json");
        if(file.exists()) {
            file.delete();
        }
        file.createNewFile();
        FileOutputStream fileOutputStream=new FileOutputStream(file);
        OutputStreamWriter outputStreamWriter=new OutputStreamWriter(fileOutputStream,"utf-8");
        BufferedWriter bufferedWriter= new BufferedWriter(outputStreamWriter);

        String jsonString=jsonData.toString();
        String JsonString=tool.stringToJSON(jsonString);
        bufferedWriter.write(JsonString);
        bufferedWriter.flush();
        bufferedWriter.close();
    }
}

class Tool {
    private boolean isTab = true;
    public String stringToJSON(String strJson) {
        int tabNum = 0;
        StringBuffer jsonFormat = new StringBuffer();
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
