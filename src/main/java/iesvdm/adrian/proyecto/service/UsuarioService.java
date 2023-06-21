package iesvdm.adrian.proyecto.service;

import iesvdm.adrian.proyecto.domain.Usuario;
import iesvdm.adrian.proyecto.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;
    private Object productCustomRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> all() {
        return this.usuarioRepository.findAll();
    }

    public Usuario save(Usuario product) {
        return this.usuarioRepository.save(product);
    }
    
    public Optional<Usuario> one(Long id) {
        return this.usuarioRepository.findById(id);
    }

    public Optional<Usuario> replace(Long id, Usuario usuario) {

        return this.usuarioRepository.findById(id).map( p -> (id.equals(usuario.getId())  ?
                this.usuarioRepository.save(usuario) : null));

    }

    public void delete(Long id) {
        this.usuarioRepository.findById(id).map(p -> {this.usuarioRepository.delete(p);
            return p;});
    }

    public List<Usuario> usuarioLogeado(String usuario, String password){
        return this.usuarioRepository.findByUsuarioAndPassword(usuario, password);
    }

    public List<Usuario> usuariosEnEquipos(Long idEquipo){
        return this.usuarioRepository.findByUsuarioEnEquipo(idEquipo);
    }
}
