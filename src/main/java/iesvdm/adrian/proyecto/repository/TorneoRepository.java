package iesvdm.adrian.proyecto.repository;

import iesvdm.adrian.proyecto.domain.Torneo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TorneoRepository extends JpaRepository<Torneo, Long> {
}
