package id.birokrazy.controller;

import id.birokrazy.model.Department;
import id.birokrazy.repository.SearchRepository;
import id.birokrazy.model.CivilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@RestController
public class SearchController extends PublicController {

    @Autowired
    SearchRepository searchRepository;

    @RequestMapping(path = "/search/serviceOrDepartment", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Iterable<Map<String, String>> findServiceOrDepartment(@RequestParam(name="query") String query) {
        List<CivilService> civilServiceList = searchRepository.searchCivilService(query);
        List<Department> departmentList = searchRepository.searchDepartment(query);
        List<Map<String, String>> results = new ArrayList<Map<String, String>>();
        for(CivilService civilService : civilServiceList){
            createResultMap(results, "civilService", civilService.getName(), civilService.getUniqueName());
        }
        for(Department department : departmentList){
            createResultMap(results, "department", department.getName(), department.getUniqueName());
        }
        return results;

    }

    @RequestMapping(path = "/search/location", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Iterable<Map<String, String>> findLocation(@RequestParam(name = "query") String query) {
        List<Department> departmentList = searchRepository.searchLocation(query);
        List<Map<String, String>> results = new ArrayList<Map<String, String>>();
        for(Department department : departmentList){
            createResultMap(results, "department", department.getLocationName(), department.getUniqueName());
        }
        return results;
    }

    private void createResultMap(List<Map<String, String>> results, String type, String name, String uniqueName) {
        Map<String, String> result = new HashMap<>();
        result.put("type", type);
        result.put("name", name);
        result.put("uniqueName", uniqueName);
        results.add(result);
    }
}
