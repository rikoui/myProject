package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

	/**
	 * 注解赋值
	 * 将配置文件application.yml中的值赋给变量
	 * @return
	 */
//	@Value("${girlName}")
//	private String girlName;
//	
//	@Value("${girlAge}")
//	private int girlAge;
//	
//	@Value("${content}")
//	private String content;
	
	@Autowired
	private GirlProperties girlProperties;
	
	@RequestMapping(value="/hello", method=RequestMethod.GET)
	public String sayHello() {
		// return "Hello Word! Hello SpringBoot!  =====> " + cupSize + "年龄：" + age;
		// return content;
		return "GilrName : " + girlProperties.getName() + " GirlAge : " + girlProperties.getAge();
	}
}
