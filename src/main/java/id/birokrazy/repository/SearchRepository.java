package id.birokrazy.repository;

import id.birokrazy.model.CivilService;
import id.birokrazy.model.Department;
import org.hibernate.search.jpa.FullTextEntityManager;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Service
@Repository
@Transactional
public class SearchRepository {

    @PersistenceContext
    private EntityManager entityManager;

    FullTextEntityManager fullTextEntityManager;

    public List<CivilService> searchCivilService(String text) {


        this.fullTextEntityManager =
                org.hibernate.search.jpa.Search.
                        getFullTextEntityManager(entityManager);
        // create the query using Hibernate Search query DSL
        QueryBuilder queryBuilder =
                fullTextEntityManager.getSearchFactory()
                        .buildQueryBuilder().forEntity(CivilService.class).get();

        // a very basic query by keywords
        org.apache.lucene.search.Query query =
                queryBuilder
                        .keyword()
                        .onFields("name")
                        .matching(text)
                        .createQuery();

        // wrap Lucene query in an Hibernate Query object
        org.hibernate.search.jpa.FullTextQuery jpaQuery =
                fullTextEntityManager.createFullTextQuery(query, CivilService.class);

        // execute search and return results (sorted by relevance as default)
        List<CivilService> results = jpaQuery.getResultList();

        return results;
    }

    public List<Department> searchDepartment(String text) {
        return searchDepartmentOrLocation(text, "name");

    }

    public List<Department> searchLocation(String text) {
        return searchDepartmentOrLocation(text, "location");
    }

    private List<Department> searchDepartmentOrLocation(String text, String... field){

        this.fullTextEntityManager =
                org.hibernate.search.jpa.Search.
                        getFullTextEntityManager(entityManager);

        // create the query using Hibernate Search query DSL
        QueryBuilder queryBuilder =
                fullTextEntityManager.getSearchFactory()
                        .buildQueryBuilder().forEntity(Department.class).get();

        // a very basic query by keywords
        org.apache.lucene.search.Query query =
                queryBuilder
                        .keyword()
                        .onFields(field)
                        .matching(text)
                        .createQuery();

        // wrap Lucene query in an Hibernate Query object
        org.hibernate.search.jpa.FullTextQuery jpaQuery =
                fullTextEntityManager.createFullTextQuery(query, Department.class);

        // execute search and return results (sorted by relevance as default)
        List<Department> results = jpaQuery.getResultList();

        return results;
    }
}
