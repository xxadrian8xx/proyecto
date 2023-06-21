package iesvdm.adrian.proyecto.controller;

import iesvdm.adrian.proyecto.domain.Usuario;
import iesvdm.adrian.proyecto.service.UsuarioService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/usuarios")
@CrossOrigin
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping(value = {"","/"})
    public List<Usuario> all() {
        return this.usuarioService.all();
    }

    @PostMapping({"","/"})
    public Usuario newUsuario(@RequestBody Usuario usuario) {
        return this.usuarioService.save(usuario);
    }

    @GetMapping("/detail/{id}")
    public Optional<Usuario> one(@PathVariable("id") Long id) {
        return this.usuarioService.one(id);
    }

    @PutMapping("/{id}")
    public Optional<Usuario> replaceProduct(@PathVariable("id") Long id, @RequestBody Usuario usuario) {
        return this.usuarioService.replace(id, usuario);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable("id") Long id) {
        this.usuarioService.delete(id);
    }

    @GetMapping(value = {"/login", "/login/{usuario}/{password}"})
    public Usuario login(@PathVariable("usuario") String usuario, @PathVariable("password") String password) {
        List<Usuario> usuarios = usuarioService.usuarioLogeado(usuario, password);
        if (!usuarios.isEmpty()) {
            return usuarios.get(0);
        }
        return null;
    }

}
