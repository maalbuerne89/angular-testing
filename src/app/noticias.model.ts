export interface IImage {
  url: string;
  normal: {
    url: string,
  };
}

export interface INoticia {
  content: string;
  created_at: string;
  fecha: string;
  id: number;
  imagen_content: IImage;
  imagen_titulo: IImage;
  order_view: number;
  titulo: string;
  subtitulo: string;
  updated_at: string;
  visible: boolean;
}
