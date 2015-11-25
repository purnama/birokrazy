package id.hackathonmerdeka.hackmdk3.service;

import id.hackathonmerdeka.hackmdk3.model.User;
import id.hackathonmerdeka.hackmdk3.model.UserRole;
import id.hackathonmerdeka.hackmdk3.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository repository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findByUsername(username);
        List<GrantedAuthority> authorities = buildUserAuthority(user.getRoles());

        return buildUserForAuthentication(user, authorities);
    }

    private org.springframework.security.core.userdetails.User
    buildUserForAuthentication(User user,
                               List<GrantedAuthority> authorities) {
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(), user.getPassword(), authorities);
    }

    private List<GrantedAuthority> buildUserAuthority(Set<UserRole> userRoles) {

        Set<GrantedAuthority> setAuths = new HashSet<GrantedAuthority>();

        // Build user's authorities
        for (UserRole userRole : userRoles) {
            setAuths.add(new SimpleGrantedAuthority(userRole.getRole()));
        }

        return new ArrayList<GrantedAuthority>(setAuths);
    }
}
