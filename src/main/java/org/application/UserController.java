// controller/UserController.java
package org.application;

import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public String signup(@RequestBody UserDTO userDTO) {
        if (userRepository.findByUsername(userDTO.getUsername()).isPresent()) {
            return "Username already exists!";
        }
        User user = new User(null, userDTO.getUsername(), userDTO.getPassword());
        userRepository.save(user);
        return "Signup successful!";
    }

    @PostMapping("/login")
    public String login(@RequestBody UserDTO userDTO) {
        return userRepository.findByUsername(userDTO.getUsername())
                .filter(u -> u.getPassword().equals(userDTO.getPassword()))
                .map(u -> "Login successful!")
                .orElse("Invalid username or password!");
    }
}
