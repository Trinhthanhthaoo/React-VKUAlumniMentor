package com.dacs.VKUAlumniMentor.Controller;

/*
@Controller : file HXML file or JSP muốn tạo ra chuỗi thì + @ResponseBody == > @Controller+ @ResponseBody = @ResController
@ResController : giá trị trả ra là chuỗi
@RequestMapping : đăng ký đường dẫn (Cha)
@GetMapping / @Postmapping : đăng ký đường dẫn (Con)
truyền tham số :  @GetMapping("/Path/{id}/{username}")
                    public String TestPath( @PathVariable("id") String id, @PathVariable() String username){
                    return "hello" +id +username;
                    }
                    @PostMapping : tương tự
 */

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/User")
public class UserController {

    @GetMapping("/AllUser")
    public String ALlUser(){
        return "Hello world";
    }

    @GetMapping("/Path/{id}/{username}")
    public String TestPath( @PathVariable("id") String id, @PathVariable() String username){
        return "hello" +id +username;
    }
}
