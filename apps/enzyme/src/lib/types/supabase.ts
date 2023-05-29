export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			card: {
				Row: {
					back_side: Json | null;
					created_at: string | null;
					deck_id: number | null;
					front_side: Json;
					id: number;
					updated_at: string | null;
				};
				Insert: {
					back_side?: Json | null;
					created_at?: string | null;
					deck_id?: number | null;
					front_side: Json;
					id?: number;
					updated_at?: string | null;
				};
				Update: {
					back_side?: Json | null;
					created_at?: string | null;
					deck_id?: number | null;
					front_side?: Json;
					id?: number;
					updated_at?: string | null;
				};
			};
			deck: {
				Row: {
					card_count: number | null;
					correct_count: number | null;
					created_at: string | null;
					description: string | null;
					id: number;
					title: string | null;
					updated_at: string | null;
					user_id: string | null;
					wrong_count: number | null;
				};
				Insert: {
					card_count?: number | null;
					correct_count?: number | null;
					created_at?: string | null;
					description?: string | null;
					id?: number;
					title?: string | null;
					updated_at?: string | null;
					user_id?: string | null;
					wrong_count?: number | null;
				};
				Update: {
					card_count?: number | null;
					correct_count?: number | null;
					created_at?: string | null;
					description?: string | null;
					id?: number;
					title?: string | null;
					updated_at?: string | null;
					user_id?: string | null;
					wrong_count?: number | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
