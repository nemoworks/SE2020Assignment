package com.se2020.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

public class UploadController {
    @RequestMapping("upload")
    public String uploadData(MultipartFile upload){
        return "";
    }
}

