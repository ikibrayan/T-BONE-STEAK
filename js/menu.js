const productos = [
  // 🥩 Res
  {
    categoria: 'res',
    nombre: 'Carne fina',
    precio: 16500,
    descripcion: 'Corte de res seleccionado, suave y jugoso.',
    imagen: 'img/productos/res-vaca/carne-fina.webp'
  },
  {
    categoria: 'res',
    nombre: 'Carne milanesa',
    precio: 14500,
    descripcion: 'Carne delgada ideal para empanizar o freír.',
    imagen: 'img/productos/res-vaca/milanesa.webp'
  },
  {
    categoria: 'res',
    nombre: 'Churrasco',
    precio: 21000,
    descripcion: 'Corte especial para parrilla, tierno y sabroso.',
    imagen: 'img/productos/res-vaca/churrasco.webp'
  },
  {
    categoria: 'res',
    nombre: 'Palomilla',
    precio: 14500,
    descripcion: 'Corte tradicional de res, versátil en la cocina.',
    imagen: 'img/productos/res-vaca/palomilla.webp'
  },
  {
    categoria: 'res',
    nombre: 'Falda',
    precio: 14000,
    descripcion: 'Corte ideal para sudados, caldos y guisos.',
    imagen: 'img/productos/res-vaca/falda.webp'
  },
  {
    categoria: 'res',
    nombre: 'Sobrebarriga',
    precio: 14500,
    descripcion: 'Clásico corte para sudado o al horno.',
    imagen: 'img/productos/res-vaca/sobrebarriga.webp'
  },
  {
    categoria: 'res',
    nombre: 'Murillo',
    precio: 12000,
    descripcion: 'Corte económico, ideal para guisos y sopas.',
    imagen: 'img/productos/res-vaca/murillo.webp'
  },
  {
    categoria: 'res',
    nombre: 'Morillo',
    precio: 14500,
    descripcion: 'Corte carnudo para guisos y caldos sustanciosos.',
    imagen: 'img/productos/res-vaca/morillo.webp'
  },
  {
    categoria: 'res',
    nombre: 'Hueso carnudo',
    precio: 6000,
    descripcion: 'Hueso con carne, perfecto para caldos y sopas.',
    imagen: 'img/productos/res-vaca/hueso-carnudo.webp'
  },
  {
    categoria: 'res',
    nombre: 'Molida corriente',
    precio: 9000,
    descripcion: 'Carne molida básica para todo tipo de preparaciones.',
    imagen: 'img/productos/res-vaca/carne-molida.webp'
  },
  {
    categoria: 'res',
    nombre: 'Molida especial',
    precio: 13500,
    descripcion: 'Carne molida seleccionada, más suave y magra.',
    imagen: 'img/productos/res-vaca/carne-molida-fina.webp'
  },
  {
    categoria: 'res',
    nombre: 'Costilla',
    precio: 12000,
    descripcion: 'Costilla carnosa ideal para asados y caldos.',
    imagen: 'img/productos/res-vaca/costilla.webp'
  },

  // 🍗 Pollo
  {
    categoria: 'pollo',
    nombre: 'Pechuga',
    precio: 9500,
    descripcion: 'Pechuga fresca y magra de pollo.',
    imagen: 'img/productos/pollo/pechuga.webp'
  },
  {
    categoria: 'pollo',
    nombre: 'Pierna pernil',
    precio: 6500,
    descripcion: 'Pierna pernil jugosa, ideal para asar o guisar.',
    imagen: 'img/productos/pollo/piernas-pernil.webp'
  },
  {
    categoria: 'pollo',
    nombre: 'Colombinas',
    precio: 6500,
    descripcion: 'Presas de pollo colombinas para preparar al gusto.',
    imagen: 'img/productos/pollo/colombinas.webp'
  },
  {
    categoria: 'pollo',
    nombre: 'Alas con',
    precio: 4500,
    descripcion: 'Alas de pollo, perfectas para freír o asar.',
    imagen: 'img/productos/pollo/alitas-con.webp'
  },
  {
    categoria: 'pollo',
    nombre: 'Alas sin',
    precio: 6500,
    descripcion: 'Alitas de pollo, listas para cocinar.',
    imagen: 'img/productos/pollo/alitas-sin.webp'
  },

  // Cerdo
  {
  categoria: 'cerdo',
  nombre: 'Lomo',
  precio: 14000,
  descripcion: 'Corte magro, suave y de gran versatilidad en la cocina.',
  imagen: 'img/productos/cerdo/lomo-cerdo.webp'
  },
  
  {
    categoria: 'cerdo',
    nombre: 'Pierna',
    precio: 12500,
    descripcion: 'Carne jugosa y tierna, ideal para asados y guisos.',
    imagen: 'img/productos/cerdo/pierna-cerdo.webp'
  },
  {
    categoria: 'cerdo',
    nombre: 'Costillitas',
    precio: 12500,
    descripcion: 'Costillas tiernas y sabrosas, perfectas para la parrilla.',
    imagen: 'img/productos/cerdo/costillas-cerdo.webp'
  },
  {
    categoria: 'cerdo',
    nombre: 'Panceta',
    precio: 15500,
    descripcion: 'Corte con grasa y sabor intenso, usado en frituras y asados.',
    imagen: 'img/productos/cerdo/panceta-cerdo.webp'
  },
  {
    categoria: 'cerdo',
    nombre: 'Barriga',
    precio: 14000,
    descripcion: 'Carne con alto marmoleo, muy jugosa y sabrosa.',
    imagen: 'img/productos/cerdo/barriga-cerdo.webp'
  },
  {
    categoria: 'cerdo',
    nombre: 'Papada',
    precio: 11500,
    descripcion: 'Corte graso y suave, ideal para guisos y preparaciones largas.',
    imagen: 'img/productos/cerdo/papada-cerdo.webp'
  },
  {
    categoria: 'cerdo',
    nombre: 'Chuleta',
    precio: 11500,
    descripcion: 'Corte clásico con hueso, jugoso y fácil de preparar.',
    imagen: 'img/productos/cerdo/chuleta-cerdo.webp'
  },
  {
    categoria: 'cerdo',
    nombre: 'Chuleta aumada',
    precio: 12500,
    descripcion: 'Chuleta curada y ahumada con un sabor intenso.',
    imagen: 'img/productos/cerdo/chuleta-aumada-cerdo.webp'
  },
  {
    categoria: 'cerdo',
    nombre: 'Costilla aumada',
    precio: 12000,
    descripcion: 'Costilla ahumada, suave y con aroma característico.',
    imagen: 'img/productos/cerdo/costilla-aumada-cerdo.webp'
  },
  {
    categoria: 'cerdo',
    nombre: 'Pezuña',
    precio: 6500,
    descripcion: 'Ideal para caldos y sopas, aporta gran sabor y textura.',
    imagen: 'img/productos/cerdo/pezuña-cerdo.webp'
  },


  // 🥩 Recortes
  {
    categoria: 'recortes',
    nombre: 'Recorte 1 libra',
    precio: 8000,
    descripcion: 'Recortes de res surtidos, ideales para guisos y caldos. Presentación de 1 libra.',
    imagen: 'img/productos/res-vaca/carne-fina.webp'
  },
  {
    categoria: 'recortes',
    nombre: 'Recorte 2 libras',
    precio: 15000,
    descripcion: 'Recortes de res surtidos, ideales para guisos y caldos. Presentación de 2 libras.',
    imagen: 'img/productos/res-vaca/carne-fina.webp'
  }

];



// =============================
// Productos
// =============================
let productosFiltrados = [...productos];

// Carrito: clave = índice del producto, valor = cantidad
let carrito = {};

// =============================
// Formateador a pesos colombianos
// =============================
const formatoCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0
});

// =============================
// Restaurar datos guardados
// =============================
const carritoGuardado = sessionStorage.getItem('carrito');
if (carritoGuardado) {
  carrito = JSON.parse(carritoGuardado);
}

const pedidoGuardado = sessionStorage.getItem('pedido');
if (pedidoGuardado) {
  const pedido = JSON.parse(pedidoGuardado);
  pedido.resumen.forEach(item => {
    const index = productos.findIndex(p => p.nombre === item.nombre);
    if (index !== -1) carrito[index] = item.cantidad;
  });
}

// =============================
// Renderizado del carrito
// =============================
function renderCarrito() {
  const contenedor = document.querySelector('.cart-items');
  contenedor.innerHTML = '';

  productosFiltrados.forEach((producto) => {
    const index = productos.indexOf(producto);
    const cantidad = carrito[index] || 0;

    // 👇 Si es de res, usamos libras
    const esCarne = producto.categoria === 'res';
    const unidad = esCarne ? ' lb' : '';

    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <div class="info">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <div class="bottom">
          <span>
            ${formatoCOP.format(producto.precio * (cantidad || 1))}
            ${esCarne && cantidad > 0 ? ` (${cantidad}${unidad})` : ''}
          </span>
          <div class="qty">
            <button class="menos" data-id="${index}">−</button>
            <span id="cant_${index}">${cantidad}${unidad}</span>
            <button class="mas" data-id="${index}">+</button>
          </div>
        </div>
        ${esCarne ? `<p class="unidad">Precio por libra</p>` : ''}
      </div>
    `;
    contenedor.appendChild(item);
  });

  // Asignar eventos a los botones
  document.querySelectorAll('.mas').forEach(btn => {
    btn.addEventListener('click', () => cambiarCantidad(parseInt(btn.dataset.id), 1));
  });

  document.querySelectorAll('.menos').forEach(btn => {
    btn.addEventListener('click', () => cambiarCantidad(parseInt(btn.dataset.id), -1));
  });

  actualizarTotal();
}


// =============================
// Cambiar cantidad
// =============================
function cambiarCantidad(index, delta) {
  carrito[index] = Math.max(0, (carrito[index] || 0) + delta);
  document.getElementById(`cant_${index}`).textContent = carrito[index];
  actualizarTotal();
}

// =============================
// Calcular y actualizar total
// =============================
function actualizarTotal() {
  let total = 0;
  for (const i in carrito) {
    const index = parseInt(i, 10); // 👈 convertir clave a número
    if (productos[index]) {
      total += productos[index].precio * carrito[i];
    }
  }

  const totalTexto = document.getElementById('total-price');
  if (totalTexto) {
    totalTexto.textContent = formatoCOP.format(total);
  }

  // Guardar carrito en sessionStorage
  sessionStorage.setItem('carrito', JSON.stringify(carrito));
}

// =============================
// Filtro de categorías
// =============================
function filtrarBotonCategoria(boton, categoria) {
  document.querySelectorAll('.categoria-btn').forEach(btn => btn.classList.remove('active'));
  boton.classList.add('active');
  localStorage.setItem('categoriaSeleccionada', categoria);
  filtrarCategoria(categoria);
}

function filtrarCategoria(categoria) {
  productosFiltrados = productos.filter(producto => producto.categoria === categoria);
  renderCarrito();
}

// =============================
// Evento de Realizar Pedido
// =============================
document.querySelector('.pay').addEventListener('click', () => {
  const resumen = [];
  let total = 0;

  for (const i in carrito) {
    const index = parseInt(i, 10);
    const producto = productos[index];
    const cantidad = carrito[i];
    if (producto && cantidad > 0) {
      const subtotal = producto.precio * cantidad;

      resumen.push({
        nombre: producto.nombre,
        cantidad,
        subtotal
      });

      total += subtotal;
    }
  }

  const pedido = { resumen, total };

  // Guardar en localStorage y sessionStorage
  localStorage.setItem('pedido', JSON.stringify(pedido));
  sessionStorage.setItem('pedido', JSON.stringify(pedido));

  // No limpiamos el carrito para que siga al volver atrás
  window.location.href = 'customer.html';
});

// =============================
// Inicialización al cargar
// =============================
const categoriaGuardada = localStorage.getItem('categoriaSeleccionada');

if (categoriaGuardada) {
  const boton = [...document.querySelectorAll('.categoria-btn')]
    .find(btn => btn.getAttribute('onclick').includes(categoriaGuardada));

  if (boton) {
    boton.classList.add('active');
    filtrarCategoria(categoriaGuardada);
  } else {
    productosFiltrados = [...productos];
    renderCarrito();
  }
} else {
  productosFiltrados = [...productos];
  renderCarrito();
}
