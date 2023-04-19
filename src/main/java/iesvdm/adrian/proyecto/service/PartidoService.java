package iesvdm.adrian.proyecto.service;

import iesvdm.adrian.proyecto.domain.Partido;
import iesvdm.adrian.proyecto.domain.Torneo;
import iesvdm.adrian.proyecto.repository.PartidoRepository;
import iesvdm.adrian.proyecto.repository.TorneoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PartidoService {
    private final PartidoRepository partidoRepository;

    public PartidoService(PartidoRepository partidoRepository) {
        this.partidoRepository = partidoRepository;
    }

    public List<Partido> all() {
        return this.partidoRepository.findAll();
    }

    public Partido save(Partido product) {
        return this.partidoRepository.save(product);
    }

    public Optional<Partido> one(Long id) {
        return this.partidoRepository.findById(id);
    }

    public Optional<Partido> replace(Long id, Partido partido) {
        return this.partidoRepository.findById(id).map( p -> (id.equals(partido.getId())  ?
                this.partidoRepository.save(partido) : null));
    }

    public void delete(Long id) {
        this.partidoRepository.findById(id).map(p -> {this.partidoRepository.delete(p);
            return p;});
    }
}
